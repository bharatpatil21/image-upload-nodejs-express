'use strict';

let util = require('util');
let fs = require("fs");

module.exports = {
  uploadImage: uploadImage
};

function uploadImage(req, res) {
  let reqPath = req.swagger.params.uploadfile.originalValue;
  let path = './uploads/';

  if (!fs.existsSync(path)){
    fs.mkdirSync(path);
  }
  fs.writeFile( path + reqPath.originalname, reqPath.buffer , (err) => {
    if (err) {
      let err = { message: 'File not uploaded' };
      return next(err);
    }
    res.json("File uploaded");
  });
}
