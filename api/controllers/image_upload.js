'use strict';

var util = require('util');
var fs = require("fs");

module.exports = {
  uploadImage: uploadImage
};

function uploadImage(req, res) {
  let reqPath = req.swagger.params.uploadfile.originalValue;
  let path = './uploads/';

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  fs.writeFile( path + reqPath.originalname, reqPath.buffer , (err) => {
    if (err) {
      var err = { message: 'File not uploaded' };
      return next(err);
    }
    res.json("File uploaded");
  });
}
