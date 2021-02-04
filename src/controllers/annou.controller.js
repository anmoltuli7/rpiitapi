const AnnouModal = require('../models/annou.modal')
// get fyear list
exports.getAnnouList = (req, res) =>{
    // console.log("here all fyear list");
    AnnouModal.getAllAnnou((err, annou) =>{
        console.log("here we go");
        if(err)
        res.send(err);
        console.log('Annou',annou);
        res.send(annou)
    })
}