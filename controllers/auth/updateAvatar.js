const { User } = require("../../models");

const updateAvatar = async (req, res) => {
  const { _id: owner, email } = req.user;

  const avatarURL = req.file.path;
  console.log("updateAvatar-avatarURL", avatarURL);

  await User.updateOne(
    { owner },
    {
      $set: { avatarURL },
    },
    { new: true }
  );

  res.status(200).json(avatarURL);
};

module.exports = updateAvatar;
