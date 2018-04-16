const Express = require('express');

const exampleController = require('../controllers/exampleController');
const { catchErrors } = require('../handlers/errorHandler');

const router = Express.Router();

router.get('/', exampleController.get, catchErrors(exampleController.save));

module.exports = router;
