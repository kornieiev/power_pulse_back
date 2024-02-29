const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");

const Jimp = require("jimp");
const { changeImageSize } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;

  // беремо тимчасовий шлях:
  const { path: tempUpload, originalname } = req.file;

  // якщо якийсь юзер пришле файл з таким самим імям, як уже є - fs його перезапише. Тому до оригінального імені файлу додається id користувача:
  const filename = `${_id}_${originalname}`;

  // створюємо шлях де він має бути:
  const resultUpload = path.join(avatarsDir, filename);

  // переміщуємо файл:
  await fs.rename(tempUpload, resultUpload);

  // записуємо новий шлях в базу:
  const avatarURL = path.join("avatars", filename);

  // визизаємо Jimp для обрізання розміру фото:
  changeImageSize(avatarURL);

  await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
