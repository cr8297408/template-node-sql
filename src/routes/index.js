const express = require('express')
const router = express.Router();

const UserRouter = require('./user');
const EventRouter = require('./event');
const AuthRouter = require('./auth');
const FileRouter = require('./file');
const ReportTypeRouter = require('./report-type');
const SupportTicketRouter = require('./support-ticket');
const TicketThreadRouter = require('./ticket-thread');

router.use('/v1/users', UserRouter);
router.use('/v1/auth', AuthRouter);
router.use('/v1/events', EventRouter);
router.use('/v1/files', FileRouter);
router.use('/v1/reportTypes', ReportTypeRouter);
router.use('/v1/supportTickets', SupportTicketRouter);
router.use('/v1/ticketThreads', TicketThreadRouter);

module.exports = router;