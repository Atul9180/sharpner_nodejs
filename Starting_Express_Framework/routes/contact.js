const express = require('express');
const router = express.Router();

const contactFormController = require('../controllers/contact')


router.get('/contactUs',contactFormController.getContactFormController);

router.post('/contactUs',contactFormController.postContactFormController);

router.get('/success',contactFormController.getSuccessMsgContactFormController);

module.exports = router;