const multer = require("multer");
const upload = multer();

const mysql = require('mysql');
const connectionDB = mysql.createConnection({
    user:'root',
    password:'1234',
    host:'127.0.0.1',
    database:'myHive'
})

module.exports = (app)=>{



app.post('/products' , upload.single("productphoto"), (request , response) => {  
console.log(request.files.productphoto.data.buffer.toString('base64'))

connectionDB.query(`INSERT INTO imageproduct (imagep) VALUE ("${request.files.productphoto.data.toString('base64')}")`)


response.json({
    message:'Your photo has been saved'
})

})
}