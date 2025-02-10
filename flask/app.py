from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load trained ML models and scalers
with open("yield_model.pkl", "rb") as f:
    yield_model, yield_scaler = pickle.load(f)  # Unpacking yield model and scaler

with open("recommendation_model.pkl", "rb") as f:
    crop_model = pickle.load(f)  # Loading crop recommendation model

# Define feature names for crop recommendation model
crop_feature_names = ['N', 'P', 'K', 'temperature', 'humidity']

@app.route("/predict_yield", methods=["POST"])
def predict_yield():
    try:
        data = request.json
        features = np.array([[data["Soil_Temp"], data["N"], data["P"], data["K"], 
                              data["Moisture"], data["Humidity"], data["Air_Temp"]]])
        
        # Apply scaling using the loaded scaler
        scaled_features = yield_scaler.transform(features)
        
        # Make prediction
        prediction = yield_model.predict(scaled_features)[0]
        
        return jsonify({"yield": prediction})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/predict_crop', methods=['POST'])
def predict_crop():
    try:
        data = request.json
        input_features = [data[feature] for feature in crop_feature_names]
        
        # Get probabilities for each crop
        probabilities = crop_model.predict_proba([input_features])[0]

        # Get indices of top 3 crops
        top_3_indices = np.argsort(probabilities)[-3:][::-1]

        # Get the names and probabilities of the top 3 crops
        top_3_crops_with_probabilities = [
            {
                "crop": crop_model.classes_[i], 
                "probability": probabilities[i] * 100
            } for i in top_3_indices
        ]

        return jsonify({'predictions': top_3_crops_with_probabilities})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(port=5001, debug=True)