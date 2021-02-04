var dbconn = require('../../config/db.config');

var Fyear = (fyear) =>{
    this.FAREA = fyear.FARER;
 }

 // get financial year
 Fyear.getAllFyear = (result) =>{
     dbconn.query('SELECT YAREA FROM FYEAR',(err,res) =>{
      if(err){
          console.log('error while fatching fyear' , err);
          result(null,err);   
      }
      else{
          console.log('financial year fetch successfully');
          result(null,res);
      }
     })
 }

 module.exports = Fyear;