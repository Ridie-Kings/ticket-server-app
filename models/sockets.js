const TicketList = require('./ticket-list');


class Sockets {

    constructor(io) {

        this.io = io;

        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            console.log('cliente conectado');

            socket.on('request-ticket', (data, callback) => {
                const newTicket = this.ticketList.createTicket();
                callback(newTicket);
            });

            socket.on('next-ticket-to-attend', ({ agent, desktop }, callback) => {
                const yourTicket = this.ticketList.assignTicket(agent, desktop);
                callback(yourTicket);
                console.log(yourTicket);
                this.io.emit('ticket-assigned', this.ticketList.last13)
            })

        });
    }


}


module.exports = Sockets;