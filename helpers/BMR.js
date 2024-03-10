const HttpError = require("./HttpError");

const BMR = (
  height = 0,
  currentWeight = 0,
  levelActivity = 0,
  age = 0,
  sex = ""
) => {
  const lifeStyle = { 1: 1.2, 2: 1.375, 3: 1.55, 4: 1.725, 5: 1.9 };

  let BMRresult;
  if (sex === "male") {
    BMRresult = Math.round(
      (10 * currentWeight + 6.25 * height - 5 * age + 5) *
        (levelActivity * lifeStyle[levelActivity])
    );
  } else if (sex === "female") {
    BMRresult = Math.round(
      (10 * currentWeight + 6.25 * height - 5 * age - 161) *
        (levelActivity * lifeStyle[levelActivity])
    );
  } else {
    throw HttpError(400, "Not enough data for calculate BMR. Enter your sex");
  }

  return BMRresult;
};

module.exports = BMR;
