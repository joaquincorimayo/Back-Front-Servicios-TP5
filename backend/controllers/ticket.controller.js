const Ticket = require('../models/ticket');
const ticketCtrl = {}

/**
 * Permite dar de alta un ticket
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
ticketCtrl.createTicket = async (req, res) => {
    let sector = new Ticket(req.body);
    try {
        await sector.save();
        res.json({'status': '1', 'msg': 'Ticket saved.'})
    } catch (error) {
        console.log(error);
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}

/**
 * Permite recuperar todos los tickets
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
ticketCtrl.getTickets = async (req, res) => {
    let tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}

/**
 * Permite recuperar todos los tickets, segun tipo de espectador.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
ticketCtrl.getTicketsByCategory = async (req, res) => {
    let tickets = await Ticket.find({categoriaEspectador: req.params.category}).populate("espectador");
    res.json(tickets);
}

/**
 * Permite eliminar un ticket pasandole el ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({_id: req.params.id});
        res.json({
            status: '1', msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}

/**
 * Permite actualizar un objeto de tipo ticket.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
ticketCtrl.editTicket = async (req, res) => {
    const ticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({_id: req.body._id}, ticket);
        res.json({'status': '1', 'msg': 'Ticket updated'})
    } catch (error) {
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}

module.exports = ticketCtrl;