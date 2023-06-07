const ticketCtrl = require('./../controllers/ticket.controller');

const express = require('express');
const router = express.Router();

router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.getTickets);
router.get('/category/:category', ticketCtrl.getTicketsByCategory);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/', ticketCtrl.editTicket);
module.exports = router;
