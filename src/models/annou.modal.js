var dbconn = require('../../config/db.config');

var Annou = (annou) =>{
    this.ID = annou.ID;
    this.Title = annou.Title;
    this.Image = annou.Image;
    this.Description = annou.Description;
    this.Date = annou.Date;
 }

 // get financial year
 Annou.getAllAnnou = (result) =>{
     dbconn.query('SELECT * FROM announcement',(err,res) =>{
      if(err){
          console.log('error while fatching Annoucement' , err);
          result(null,err);   
      }
      else{
          console.log('Annoucement list fetch successfully');
          result(null,res);
      }
     })
 }

 module.exports = Annou;