const express = require('express');
const bodyparser = require('body-parser');

//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 3000;

//parse request data content type application/x-ww-form-rulencoded
app.use(bodyparser.urlencoded({extended: false}));

//prase reuest date content type application/json
app.use(bodyparser.json());




//define root route
app.get('/', (req,res)=>{
    res.send("heloo")
});

// import fyear routes
const fyearRoutes = require('./src/routes/fyear.route');

// create fyear routes
app.use('/fyear', fyearRoutes);

const annouRoutes = require('./src/routes/annou.route');

// create fyear routes
app.use('/annou', annouRoutes);


//listen to the post
app.listen(port, ()=>{
    console.log(`express server running at port ${port}`);
})