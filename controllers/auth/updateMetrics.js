const { HttpError } = require("../../helpers");
const BMR = require("../../helpers/BMR");
const { Metric } = require("../../models");

const updateMetrics = async (req, res, next) => {
  const {
    height: newHeight,
    currentWeight: newCurrentWeight,
    desiredWeight: newDesiredWeight,
    blood: newBlood,
    sex: newSex,
    levelActivity: newLevelActivity,
    age: newAge,
    userName: newUserName,
  } = req.body;

  const { _id: owner } = req.user;

  const newResultBMR = BMR(
    newHeight,
    newCurrentWeight,
    newLevelActivity,
    newAge
  );

  const userMetric = await Metric.find({ owner });
  console.log("userMetric:", userMetric);

  if (userMetric.length > 0) {
    const result = await Metric.findOneAndUpdate(
      { owner },
      {
        $set: {
          userName: newUserName,
          height: newHeight,
          currentWeight: newCurrentWeight,
          desiredWeight: newDesiredWeight,
          blood: newBlood,
          sex: newSex,
          levelActivity: newLevelActivity,
          age: newAge,
          resultBMR: newResultBMR,
        },
      },
      { new: true }
    );
    res.status(200).json(result);
  } else {
    res.status(404).json("Metric of User not found");
  }
};

module.exports = updateMetrics;
