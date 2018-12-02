var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs');
app.use(formidable({uploadDir: './public' }));
app.listen(3000, () => console.log('SERVER started'));


app.post('/', (req,res) => {
//  console.log(req.fields);
  console.log(req.files.avatar);
  fs.rename(req.files.avatar.path, req.files.avatar.path + '.jpg', err => {
    res.send('xin chao');
  });
});
