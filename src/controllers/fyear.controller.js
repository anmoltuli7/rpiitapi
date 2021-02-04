
// const Fyear = require('../models/fyear.modal')
const FyearModal = require('../models/fyear.modal')
// get fyear list
exports.getFyearList = (req, res) =>{
    // console.log("here all fyear list");
    FyearModal.getAllFyear((err, fyear) =>{
        console.log("here we go");
        if(err)
        res.send(err);
        console.log('Fyear',fyear);
        res.send(fyear)
    })
}