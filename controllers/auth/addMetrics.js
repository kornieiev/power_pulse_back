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
    userName,
  } = req.body;

  const { _id: owner } = req.user;
  const userMetric = await Metric.find({ owner });

  const BMR =
    (10 * currentWeight + 6.25 * height - 5 * age + 5) *
    (levelActivity * lifeStyle[levelActivity]);

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
      BMR,
    });
    res.status(200).json(result);
  } else {
    res.status(409).json("User metrics has been already created");
  }
};

module.exports = addMetrics;
