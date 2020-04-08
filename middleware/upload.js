const util = require('util');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join('${__dirname}/../public/images'));
  },
  filename: (req, file, callback) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const message = `${file.originalname} Image is invalid. Only png/jpeg are accepted.`;
      return callback(message, null);
    }

    const filename = '${Date.now()}-bezkoder-${file.originalname}'; // To avoid duplication
    // callback(null, filename);
    callback(null, "c://testpic")
  }
});

 const uploadFiles = multer({ storage: storage }).array("multi-files", 10);
 const uploadFilesMiddleware = util.promisify(uploadFiles);

module.exports = uploadFilesMiddleware;