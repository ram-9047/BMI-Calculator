import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.Gender) {
    var gender = req.body.Gender;
  } else {
    res.status(400).send("Please Enter Gender (M/F)");
  }
  if (req.body.HeightCm) {
    var height = req.body.HeightCm / 100;
  } else {
    res.status(400).send("Please Enter your Height (in cm)");
  }
  if (req.body.WeightKg) {
    var weight = req.body.WeightKg;
  } else {
    res.status(400).send("Please Enter your weight (in Kg)");
  }
  const BMI = (weight / (height * height)).toFixed(2) + " kg/m2";
  if (BMI < 18.4) {
    res.status(200).json({
      BMI,
      message: {
        "BMI Category": "Underweight",
        "Health Risk": "Malnutrition risk",
      },
    });
  } else if (18.5 < BMI < 24.9) {
    res.status(200).json({
      BMI,
      message: {
        "BMI Category": "Normal Weight",
        "Health Risk": "Low risk ",
      },
    });
  } else if (25 < BMI < 29.9) {
    res.status(200).json({
      BMI,
      message: {
        "BMI Category": "Overweight",
        "Health Risk": "Enhanced risk",
      },
    });
  } else if (30 < BMI < 34.9) {
    res.status(200).json({
      BMI,
      message: {
        "BMI Category": "Moderately obese ",
        "Health Risk": "Medium risk",
      },
    });
  } else if (35 < BMI < 39.9) {
    res.status(200).json({
      BMI,
      message: {
        "BMI Category": "Severely obese ",
        "Health Risk": "High risk",
      },
    });
  } else {
    res.status(200).json({
      BMI,
      message: {
        "BMI Category": "Very severely obese",
        "Health Risk": "Very high risk",
      },
    });
  }
});

export default router;
