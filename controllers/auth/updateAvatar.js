const { User } = require("../../models");

const updateAvatar = async (req, res) => {
  const { _id: owner, email } = req.user;

  const avatarURL = req.file.path;
  console.log("updateAvatar-avatarURL", avatarURL);

  const newAvatar = await User.findByIdAndUpdate(
    owner,
    {
      $set: { avatarURL },
    },
    { new: true }
  );

  res.status(200).json({ newAvatar });
};

module.exports = updateAvatar;
