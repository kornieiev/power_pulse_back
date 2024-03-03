const { Metric } = require("../../models");

const lifeStyle = {
  1: 1.2,
  2: 1.375,
  3: 1.55,
  4: 1.725,
  5: 1.9,
};

const addMetrics = async (req, res, next) => {
  const {
    height,
    currentWeight,
    desiredWeight,
    blood,
    sex,
    levelActivity,
    age,
  } = req.body;

  const { _id: owner } = req.user;

  // console.log("owner:", owner);

  // const userMetric = await Metric.find(owner === owner);
  // console.log("userMetric:", userMetric);

  const BMR =
    (10 * currentWeight + 6.25 * height - 5 * age + 5) *
    (levelActivity * lifeStyle[levelActivity]);

  console.log("BMR:", BMR);

  try {
    const result = await Metric.create({
      height,
      currentWeight,
      desiredWeight,
      blood,
      sex,
      levelActivity,
      owner,
      age,
      BMR,
    });
  } catch (error) {
    console.log("error:", error);
  }

  res.status(200).json("Metrics added");
};

module.exports = addMetrics;
