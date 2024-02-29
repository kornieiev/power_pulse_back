const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  console.log(typeof id, id);

  const deletedContact = await Contact.findByIdAndDelete(id);

  if (!deletedContact) {
    throw HttpError(404);
  }
  res.status(200).json(deletedContact);
};

module.exports = deleteContactById;
