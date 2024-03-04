const { Metric } = require("../../models");
// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = process.env;

const lifeStyle = {
  1: 1.2,
  2: 1.375,
  3: 1.55,
  4: 1.725,
  5: 1.9,
};

const addMetrics = async (req, res, next) => {
  // const { id } = jwt.verify(token, JWT_SECRET);
  // console.log("addMetrics-JWT-id", id);

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
  console.log("owner:", owner);
  const userMetric = await Metric.find({ owner });
  console.log("userMetric:", userMetric);

  const BMR =
    (10 * currentWeight + 6.25 * height - 5 * age + 5) *
    (levelActivity * lifeStyle[levelActivity]);

  if (!userMetric || userMetric.length < 1) {
    console.log("метрика по такому юзеру уже заполнена");
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

    // httpError

    res.status(200).json("Metrics added");
  }
};

module.exports = addMetrics;
