const express = require('express');
const router = express.Router();

const annouController = require('../controllers/annou.controller');

//get financial year list
router.get('/',annouController.getAnnouList);

module.exports = router;