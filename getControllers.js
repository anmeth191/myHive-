
const mysql = require('mysql');
const connectionDB = mysql.createConnection({
     host:'127.0.0.1',
     user:'root',
     password:'1234',
     database:'myHive'
});

let categoriesDB = {};
let supplierDB = {};

module.exports = (app) => {

app.get('/categories' , (request , response )=>{
 connectionDB.query('SELECT * FROM category' , (error , resultsDB )=>{ 
     if(error) throw error;
     else { categoriesDB = JSON.parse(JSON.stringify(resultsDB))}
})

   response.json({
       message:'Hello from server',
       body: categoriesDB

   })
})

app.get('/suppliers' , (request , response )=>{
    connectionDB.query('SELECT * FROM supplier' , (error , resultsDB )=>{ 
        if(error) throw error;
        else { supplierDB = JSON.parse(JSON.stringify(resultsDB))}
   })
   
      response.json({
          message:'Hello from server',
          body: supplierDB
   
      })
   })
   

}