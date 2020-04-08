const upload = require("../middleware/upload");

//for uploading multiple images for advertisment
exports.multipleUpload = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }

    return res.send(`Files has been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};

//for uploading profile pics - only 1 picture
exports.singleUpload = async (req, res) => {
    try {
      await upload(req, res);
      console.log(req.files);
  
      if (req.files.length !== 1) {
        return res.send(`You must select only 1 file.`);
      }
  
      return res.send(`Files has been uploaded.`);
    } catch (error) {
      console.log(error);  

      return res.send(`Error when trying upload files: ${error}`);
    }
  };
