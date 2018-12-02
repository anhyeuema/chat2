var base64 = require('base-64'); //tren thu vien base64
var utf8 = require('utf8'); //su dung co dau tieng viet utf8
 
var text = 'khoapham12345456711111111111111111'; //chuoi se ma hoa
var bytes = utf8.encode(text); // chuyen nay thanh ting viet co dau
var encoded = base64.encode(bytes); //ma hoa  chuoi nay
//console.log(encoded); //log ket qua ma hoa ra
/*
console.log(encoded);
console.log(bytes);
console.log(text.toString());
*/

var fs = require('fs');
var noidung = fs.readFileSync(__dirname + "/1.jpg");
console.log('-----test fs-----');
console.log(noidung);
var fileanh = noidung.toJSON();
console.log(noidung.toJSON());

/*
var arrayBuffer = buffer.buffer.slice(
    buffer.byteOffset, buffer.byteOffset + buffer.byteLength
);
*/


var Buffer = require('buffer/').Buffer  // khai bao thu vien buffer

var text = 'khoapham12345456711111111111111111';
var bytes = Buffer(text); // truyen ve dang buffer
console.log('-----test BUFFER-----');
console.log(bytes); // log buffer ra
console.log(bytes.toJSON());
console.log(bytes.toString());

/*
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
*/


var fs = require('fs');
// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file); // chuyen buffer
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64'); //chuyen thanh base64
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
  // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
  var bitmap = new Buffer(base64str, 'base64');
  // write buffer to file
  fs.writeFileSync(file, bitmap);
  console.log('******** File created from base64 encoded string ********');
}

// convert image to base64 encoded string
var base64str = base64_encode('1.jpg');
console.log('----base64str------');
console.log(base64str);




var bitmap1 = fs.readFileSync('1.jpg'); //chuyen thanh buffer


console.log('-----bitmap1----');
console.log(bitmap1);
console.log('-----base64----');
console.log(Buffer(bitmap1).toString('base64')); // buffer chuyen base64
console.log('-----=========================================----');

/*
// convert base64 string back to image 
base64_decode(base64str, 'copy.jpg');
*/




var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000, console.log('server_start'));

io.on('connection', socket => {
  console.log('co nguoi vua ket noi: ' + socket.id);
  socket.on('client-send-color', data => {
    console.log('app vua gui massage: ' + Buffer(data));
    console.log(data);
    // console.log(data.toJSON());
    console.log(Buffer(data).toString());
    const sendEmit = async () => {
      const yyy = await io.sockets.emit('server-send-client', { typedata: [{ anh: noidung, id: socket.id, text: data }], type: [{ ba: '3', hai: '2' }], noidungemit: await [{ dataImageJson: await fileanh }], fileBase: [{ fileImgaBase: base64str, bufferImage: bitmap1 }] });
      return yyy;
    }
    sendEmit();

  });
});


//console.log(text.toJSON());
