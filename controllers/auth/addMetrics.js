const BMR = require("../../helpers/BMR");
const { Metric } = require("../../models");

const addMetrics = async (req, res, next) => {
  const {
    height,
    currentWeight,
    desiredWeight,
    blood,
    sex,
    levelActivity,
    age,
    userName,
  } = req.body;

  const { _id: owner } = req.user;
  const userMetric = await Metric.find({ owner });

  const resultBMR = BMR(height, currentWeight, levelActivity, age);

  if (userMetric && userMetric.length < 1) {
    const result = await Metric.create({
      userName,
      height,
      currentWeight,
      desiredWeight,
      blood,
      sex,
      levelActivity,
      owner,
      age,
      resultBMR,
    });
    res.status(200).json(result);
  } else {
    res.status(409).json("User metrics has been already created");
  }
};

module.exports = addMetrics;
