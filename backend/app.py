from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

MONGO_URI = "mongodb+srv://gopikaofficial003_db_user:gopika%400308@cyberthreatdb.r09qp2n.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(MONGO_URI)
db = client["cyberThreatDB"]

users_collection = db["users"]
threat_collection = db["threatLogs"]


@app.route("/")
def home():
    return {"message": "Cyber Threat Backend is working"}


@app.route("/register", methods=["POST"])
def register():
    data = request.json

    user = {
        "name": data["name"],
        "email": data["email"],
        "password": data["password"]
    }

    users_collection.insert_one(user)

    return jsonify({
        "message": "User registered successfully"
    }), 201


@app.route("/login", methods=["POST"])
def login():
    data = request.json

    email = data.get("email")
    password = data.get("password")

    user = users_collection.find_one({
        "email": email,
        "password": password
    })

    if user:
        return jsonify({
            "message": "Login successful",
            "user": {
                "name": user["name"],
                "email": user["email"]
            }
        }), 200

    return jsonify({
        "message": "Invalid email or password"
    }), 401


@app.route("/scan-url", methods=["POST"])
def scan_url():
    data = request.get_json()
    url = data.get("url")

    if not url:
        return jsonify({"message": "URL is required"}), 400

    risk_score = 0
    reasons = []
    url_lower = url.lower()

    suspicious_keywords = [
        "login", "verify", "secure", "account", "update",
        "bank", "password", "signin", "confirm",
        "payment", "wallet", "free", "gift"
    ]

    brand_keywords = [
        "paypal", "google", "facebook", "amazon",
        "microsoft", "apple", "netflix", "bank"
    ]

    risky_tlds = [".xyz", ".tk", ".ml", ".ga", ".cf", ".gq"]

    if url.startswith("http://"):
        risk_score += 20
        reasons.append("Uses insecure HTTP")

    if len(url) > 75:
        risk_score += 15
        reasons.append("URL is unusually long")

    hyphen_count = url.count("-")

    if hyphen_count >= 1:
        risk_score += 10
        reasons.append("URL contains hyphen")

    if hyphen_count >= 3:
        risk_score += 15
        reasons.append("URL contains multiple hyphens")

    if "@" in url:
        risk_score += 25
        reasons.append("URL contains @ symbol")

    if "//" in url[8:]:
        risk_score += 15
        reasons.append("URL contains suspicious redirect pattern")

    for tld in risky_tlds:
        if tld in url_lower:
            risk_score += 20
            reasons.append(f"Uses risky domain extension: {tld}")

    for word in suspicious_keywords:
        if word in url_lower:
            risk_score += 10
            reasons.append(f"Contains suspicious keyword: {word}")

    for brand in brand_keywords:
        if brand in url_lower and not url_lower.startswith(f"https://www.{brand}.com"):
            risk_score += 15
            reasons.append(f"Uses brand name suspiciously: {brand}")

    if risk_score > 100:
        risk_score = 100

    if risk_score >= 70:
        result = "PHISHING"
    elif risk_score >= 35:
        result = "SUSPICIOUS"
    else:
        result = "SAFE"

    confidence = risk_score

    scan_data = {
        "url": url,
        "result": result,
        "risk_score": risk_score,
        "confidence": confidence,
        "reasons": reasons
    }

    insert_result = threat_collection.insert_one(scan_data)

    response_data = {
        "id": str(insert_result.inserted_id),
        "url": url,
        "result": result,
        "risk_score": risk_score,
        "confidence": confidence,
        "reasons": reasons
    }

    return jsonify(response_data), 200


@app.route("/threat-logs", methods=["GET"])
def get_threat_logs():
    logs = []

    for log in threat_collection.find():
        logs.append({
            "id": str(log["_id"]),
            "url": log["url"],
            "result": log["result"],
            "risk_score": log["risk_score"],
            "confidence": log.get("confidence", log["risk_score"]),
            "reasons": log["reasons"]
        })

    return jsonify(logs), 200


@app.route("/dashboard-stats", methods=["GET"])
def dashboard_stats():
    total_scans = threat_collection.count_documents({})
    phishing = threat_collection.count_documents({"result": "PHISHING"})
    suspicious = threat_collection.count_documents({"result": "SUSPICIOUS"})
    safe = threat_collection.count_documents({"result": "SAFE"})

    return jsonify({
        "total_scans": total_scans,
        "phishing": phishing,
        "suspicious": suspicious,
        "safe": safe
    }), 200


if __name__ == "__main__":
    app.run(debug=False)