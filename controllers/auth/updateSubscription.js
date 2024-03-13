// const { User } = require("../../models");
// const { HttpError } = require("../../helpers");

// const updateSubscription = async (req, res, next) => {
//   const { _id: owner } = req.user;

//   const { subscription } = req.body;

//   // блок проверяет, существует ли поле subscription в теле запроса. Если поле subscription отсутствует, функция отправляет ответ с кодом состояния 400 (Неверный запрос) и сообщением об ошибке
//   if (subscription === undefined) {
//     return res.status(400).json({ message: "Subscription field not detected" });
//   }

//   const result = await User.findByIdAndUpdate(
//     owner,
//     { $set: { subscription } },
//     { new: true }
//   );
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

// module.exports = updateSubscription;
