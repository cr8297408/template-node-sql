const express = require('express')
const router = express.Router();

const UserRouter = require('./user');
const EventRouter = require('./event');
const AuthRouter = require('./auth');

router.use('/v1/users', UserRouter);
router.use('/v1/auth', AuthRouter);
router.use('/v1/events', EventRouter);

module.exports = router;