const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { id } = req.params;
  const { favorite } = req.body;
  if (favorite === undefined) {
    return res.status(400).json({ message: "Favorite field not detected" });
  }
  const result = await Contact.findByIdAndUpdate(
    // метод findByIdAndUpdate обновляет только те поля, которые ему передали
    id,
    { $set: { favorite } },
    { new: true } // new: true - команда MongoDB вернуть объект после изменения
  );
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateStatusContact;
