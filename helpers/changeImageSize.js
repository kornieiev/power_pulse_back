const Jimp = require("jimp");
const HttpError = require("./HttpError");
const path = require("path");

const avatarsDir = path.join(__dirname, "../", "public");

const changeImageSize = (tempUpload) => {
  const route = avatarsDir + "/" + tempUpload;

  Jimp.read(route, (error, image) => {
    if (error) {
      HttpError(400, "Jimp read error");
    }

    image.resize(250, 250);
    // .greyscale();

    image.write(route, (error) => {
      if (error) {
        HttpError(400, "Jimp write error");
      }
    });
  });
};

module.exports = changeImageSize;
