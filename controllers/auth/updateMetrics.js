// const { HttpError } = require("../../helpers");
// const BMR = require("../../helpers/BMR");
// const { Metric } = require("../../models");

// const updateMetrics = async (req, res, next) => {
//   const {
//     height,
//     currentWeight,
//     desiredWeight,
//     blood,
//     sex,
//     levelActivity,
//     age,
//     userName,
//     birthday,
//     avatar,
//   } = req.body;

//   const { _id: owner } = req.user;

//   let newHeight = height;
//   let newCurrentWeight = currentWeight;
//   let newSex = sex;
//   let newLevelActivity = levelActivity;
//   let newAge = age;

//   const userMetric = await Metric.find({ owner });

//   userMetric.map((el) => {
//     if (!newHeight && el.height) {
//       newHeight = el.height;
//     }
//     if (!newCurrentWeight && el.currentWeight) {
//       newCurrentWeight = el.currentWeight;
//     }
//     if (!newLevelActivity && el.levelActivity) {
//       newLevelActivity = el.levelActivity;
//     }
//     if (!newAge && el.age) {
//       newAge = el.age;
//     }
//     if (!newSex && el.sex) {
//       newSex = el.sex;
//     }
//   });

//   const newResultBMR = BMR(
//     newHeight,
//     newCurrentWeight,
//     newLevelActivity,
//     newAge,
//     newSex
//   );

//   if (userMetric.length > 0) {
//     const result = await Metric.findOneAndUpdate(
//       { owner },
//       {
//         ...userMetric,
//         $set: {
//           height,
//           currentWeight,
//           desiredWeight,
//           blood,
//           sex,
//           levelActivity,
//           age,
//           userName,
//           resultBMR: newResultBMR,
//           birthday,
//           avatar: "some link",
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json(result);
//   } else {
//     res.status(404).json("Metric of User not found");
//   }
// };

// module.exports = updateMetrics;
