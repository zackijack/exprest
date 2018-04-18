const express = require('express');

const exampleController = require('../controllers/exampleController');
const { catchErrors } = require('../handlers/errorHandler');

const router = express.Router();

router.get('/', exampleController.get, catchErrors(exampleController.save));

module.exports = router;
