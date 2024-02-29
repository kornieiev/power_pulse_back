const { Contact } = require("../../models");

const createContact = async (req, res, next) => {
  console.log("req.user - createContact", req.user);

  const { _id: owner } = req.user;

  const result = await Contact.create({ ...req.body, owner });
  res.status(200).json(result);
};

module.exports = createContact;
