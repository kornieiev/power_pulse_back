const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { id } = req.params;

  // const result = await Contact.findOne({ _id: id }); // вернет первое совпадение, или null, если не найдет
  const result = await Contact.findById(id); // или такой вариант поиска по id
  console.log("result", result);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = getContactById;
