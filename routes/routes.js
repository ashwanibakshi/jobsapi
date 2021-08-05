const express   = require('express');

const router = express.Router();

router.use('/user',require('./userRoutes'));
router.use('/job',require('./jobsRoutes'));

module.exports = router;