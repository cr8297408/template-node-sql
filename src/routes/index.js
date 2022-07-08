const express = require('express');
const path = require('path');
const router = express.Router();

const UserRouter = require('./user');
const EventRouter = require('./event');
const AuthRouter = require('./auth');
const FileRouter = require('./file');
const ReportTypeRouter = require('./report-type');
const SupportTicketRouter = require('./support-ticket');
const TicketThreadRouter = require('./ticket-thread');
const ChatRouter = require('./chat');
const MessagesRouter = require('./message');

router.use('/v1/users', UserRouter);
router.use('/v1/auth', AuthRouter);
router.use('/v1/events', EventRouter);
router.use('/v1/files', FileRouter);
router.use('/v1/reportTypes', ReportTypeRouter);
router.use('/v1/supportTickets', SupportTicketRouter);
router.use('/v1/ticketThreads', TicketThreadRouter);
router.use('/v1/chats', ChatRouter);
router.use('/v1/messages', MessagesRouter)


// prueba socket

router.use('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../', 'index.html'));
})

module.exports = router;