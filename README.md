
# Ticket Management System

This is a real-time ticket management system built with Node.js, Express, and Socket.IO. The system creates, assigns, and manages tickets for agents working at designated desks. The backend handles multiple connections and uses WebSockets for real-time communication between clients and the server.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Socket Events](#socket-events)
- [License](#license)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ticket-management-system.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd ticket-management-system
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Set up environment variables:**  
   Create a `.env` file in the root of the project and define the following variable:
    ```plaintext
    PORT=<your-port>
    ```
5. **Start the server:**
    ```bash
    npm start
    ```

## Usage

After installing and setting up the project, you can use this system to manage tickets in real-time. Clients can request new tickets, and agents can assign them to specific desks. The system is ideal for environments requiring real-time updates and ticket management across multiple desks.

To test the system, run the server and connect a client (e.g., with a simple frontend application using Socket.IO client).

## Project Structure

The project's structure is organized as follows:

```plaintext
project-root
│
├── models
│   ├── server.js         # Sets up the Express server and Socket.IO
│   ├── sockets.js        # Manages WebSocket events and ticket assignment
│   ├── ticket.js         # Defines the Ticket class for individual ticket creation
│   ├── ticket-list.js    # Handles ticket queueing and assignment
│   └── index.js          # Entry point for starting the server
│
├── .env                  # Environment configuration file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Environment Variables

This project requires the following environment variable:
- **PORT**: The port number on which the server will listen.

## API Endpoints

The server exposes the following REST endpoint:

- `GET /lasts`  
   - **Description**: Retrieves the last 13 assigned tickets.
   - **Response**:
     ```json
     {
       "ok": true,
       "lasts": [<ticket1>, <ticket2>, ..., <ticket13>]
     }
     ```

## Socket Events

This project uses Socket.IO to manage real-time events. Below is a list of custom events:

- **Connection**
  - Triggered when a client connects to the server.
  - Logs `cliente conectado`.

- **request-ticket**
  - **Description**: Allows clients to request a new ticket.
  - **Callback Response**: Returns a newly created ticket.

- **next-ticket-to-attend**
  - **Description**: Assigns the next ticket to an agent at a specified desk.
  - **Parameters**:
    - `agent`: Name of the agent attending to the ticket.
    - `desktop`: Desk where the ticket is being processed.
  - **Callback Response**: Returns the assigned ticket.
  - **Broadcasts Event**: `ticket-assigned` with the last 13 assigned tickets.

## Code Overview

### Server Initialization
- The `Server` class in `server.js` initializes the Express app, sets up middleware, and manages the Socket.IO instance.
- Middleware includes serving static files and enabling CORS.

### Ticket Management
- `Ticket`: Defines ticket properties, including ID, number, desktop, and agent.
- `TicketList`: Manages the ticket queue, including creating and assigning tickets. It maintains a record of pending and assigned tickets, with a focus on the last 13 assignments.

### Sockets
- `Sockets` class in `sockets.js` sets up event listeners and handlers for socket events like `request-ticket` and `next-ticket-to-attend`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
