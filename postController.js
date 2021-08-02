const multer = require("multer");
const upload = multer();
module.exports = (app)=>{



app.post('/products' , upload.single("productphoto"), (request , response) => {  
console.log(request.files.productphoto)

response.json({
    message:'You have made a post'
})

})
}