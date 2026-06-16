from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

@app.route("/")
def home():
    return {"message": "Cyber Threat Backend is working"}

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "All fields are required"}), 400

    user = {
        "name": name,
        "email": email,
        "password": password
    }

    users.append(user)

    return jsonify({
        "message": "User registered successfully",
        "user": user
    }), 201


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    for user in users:
        if user["email"] == email and user["password"] == password:
            return jsonify({
                "message": "Login successful",
                "user": user
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

    suspicious_keywords = ["login", "verify", "secure", "account", "update", "bank", "password"]

    if url.startswith("http://"):
        risk_score += 20
        reasons.append("Uses insecure HTTP")

    if len(url) > 75:
        risk_score += 20
        reasons.append("URL is too long")

    if "@" in url:
        risk_score += 25
        reasons.append("URL contains @ symbol")

    if "-" in url:
        risk_score += 10
        reasons.append("URL contains hyphen")

    for word in suspicious_keywords:
        if word in url.lower():
            risk_score += 10
            reasons.append(f"Contains suspicious keyword: {word}")

    if risk_score >= 60:
        result = "PHISHING"
    elif risk_score >= 30:
        result = "SUSPICIOUS"
    else:
        result = "SAFE"

    return jsonify({
        "url": url,
        "result": result,
        "risk_score": risk_score,
        "reasons": reasons
    }), 200

if __name__ == "__main__":
    app.run(debug=True)