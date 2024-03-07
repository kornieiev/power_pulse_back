const BMR = (height, currentWeight, levelActivity, age, sex) => {
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
    throw new Error('Please add your sex in metric - "male" or "female"');
  }

  return BMRresult;
};

module.exports = BMR;
