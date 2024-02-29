const { controllerWrapper } = require("../../helpers");

const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const deleteContactById = require("./deleteContactById");
const createContact = require("./createContact");
const updateContactById = require("./updateContactById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContactById: controllerWrapper(getContactById),
  deleteContactById: controllerWrapper(deleteContactById),
  createContact: controllerWrapper(createContact),
  updateContactById: controllerWrapper(updateContactById),
  updateStatusContact: controllerWrapper(updateStatusContact),
};
