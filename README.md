# Simple Zoom clone using PeerJS

## Dependencies

- Express - Server
- EJS - Templating Language
- socket.io - Communications
- UUID - Dynamic ID generator for rooms
- Nodemon - Allows for quick refreshing of app when changes are names so server doesn't need to be restarted everytime
- PeerJS - Creates connections between different users using webRTC + server to create dynamic ids for connecting between different users

## How to use

- To run PeerJS
  `peerjs --port 3001`
- To run Nodemon
  `npm run devStart`
- The room id is automatically appended to the url. This link can be shared with others to join a call.
