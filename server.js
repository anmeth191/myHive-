const express = require('express');
const getController = require('./controllers/getController');
const cors = require('cors');
const app = express();

app.set('view engine' , 'ejs');
app.use(express.json());

app.use(cors({}));
getController(app);

app.listen( 8080 , ()=>{ console.log('listenning port 8080')})