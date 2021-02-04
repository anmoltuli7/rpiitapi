const express = require('express');
const router = express.Router();

const fyearController = require('../controllers/fyear.controller');

//get financial year list
router.get('/',fyearController.getFyearList);

module.exports = router;