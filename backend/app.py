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


if __name__ == "__main__":
    app.run(debug=True)