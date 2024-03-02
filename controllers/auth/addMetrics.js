const { Metric } = require("../../models");

const addMetrics = async (req, res, next) => {
  const { height, currentWeight, desiredWeight, blood, sex, levelActivity } =
    req.body;
  console.log(height, currentWeight, desiredWeight, blood, sex, levelActivity);
  // console.log(req.body);
  res.status(200).json("Metrics");
};

module.exports = addMetrics;
