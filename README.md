# zoom-clone

## Tech Stack
### Packages and use cases
- Server - Express 
- Templating Language - EJS
- Communications - socket.io
- Dynamic ID generator for rooms - UUID
- Allows for quick refreshing of app when changes are names so server doesn't need to be restarted everytime - Nodemon
- Creates connections between different users using webRTC + server to create dynamic ids for connecting between different users - Peer JS

## Running
- To run PeerJS
`peerjs --port 3001`
- To run Nodemon
`npm run devStart`
