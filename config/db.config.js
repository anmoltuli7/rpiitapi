const mysql = require('mysql');

// create mysql connection

const dbconn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'rpiitdb'
});

dbconn.connect(function(err){
    if(err) throw err;
    console.log("Database connect successfully!")
});

module.exports = dbconn;