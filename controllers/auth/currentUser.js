const currentUser = async (req, res, next) => {
  res.json(req.user);
};
module.exports = currentUser;
