const e = require('express');
const mysql = require('mysql');
const connectionDB = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1234',
    database:'myHive',
})

let queryResults = {};


// connectionDB.connect((error) =>{
//   if(error) throw error;
//   else{
//        connectionDB.query('SELECT * FROM category' , (error , results) => {

//               queryResults = results
//       });
//   }
// }
// )

connectionDB.connect((error) =>{

    if(error) throw error;
    else{
        connectionDB.query('SELECT * FROM category' , (error , results)=>{
             queryResults = results;

        })
    }
})


module.exports = (app)=> {

app.get('/' , (request , response) =>{

       response.json({
       message:'Your request has been successful',
       body:queryResults
      })


})
}