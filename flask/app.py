from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load trained ML model and scaler
with open("yield_model.pkl", "rb") as f:
    model, scaler = pickle.load(f)  # Unpacking model and scaler

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        features = np.array([[data["Soil_Temp"], data["N"], data["P"], data["K"], data["Moisture"], data["Humidity"], data["Air_Temp"]]])

        # Apply scaling using the loaded scaler
        scaled_features = scaler.transform(features)

        # Make prediction
        prediction = model.predict(scaled_features)[0]

        return jsonify({"yield": prediction})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(port=5001, debug=True)