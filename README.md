# Real-Time Chat Application

A full-stack real-time chat application built with Node.js, Express, and Socket.io that enables instant messaging between multiple users with a clean, responsive interface.



## Tech Stack

**Backend:**
- Node.js
- Express.js
- Socket.io

**Frontend:**
- HTML5
- CSS3 (Flexbox, Animations, Media Queries)
- Vanilla JavaScript
- Socket.io Client


##  Architecture

The application uses an event-driven architecture with WebSocket for bidirectional real-time communication:

Client (Browser) ←──── WebSocket ────→ Server (Node.js)
       ↓                                      ↓
   Socket.io Client                    Socket.io Server
       ↓                                      ↓
   Event Emitters                       Event Handlers



## Installation & Setup

1. **Clone the repository**
   bash
   git clone https://github.com/your-username/realtime-chat-app.git
   cd realtime-chat-app


2. **Install dependencies**
   bash
   npm install


3. **Start the server**
   bash
   node server.js

   Or with nodemon for auto-restart:
   bash
   npm install -g nodemon
   nodemon server.js


4. **Open in browser**

   http://localhost:3100


5. **Test with multiple users**
   - Open multiple browser tabs/windows
   - Enter different usernames in each
   - Start chatting
