const lifeStyle = {
  1: 1.2,
  2: 1.375,
  3: 1.55,
  4: 1.725,
  5: 1.9,
};

const BMR = (height, currentWeight, levelActivity, age) => {
  console.log("BMR-height:", height);
  console.log("BMR-currentWeight:", currentWeight);
  console.log("BMR-levelActivity:", levelActivity);
  console.log("BMR-age:", age);

  const result =
    (10 * currentWeight + 6.25 * height - 5 * age + 5) *
    (levelActivity * lifeStyle[levelActivity]);
  console.log("BMR-result:", result);
  return result;
};

module.exports = BMR;
