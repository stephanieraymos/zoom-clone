const socket = io("/");

socket.emit("join-room", ROOM_ID, 10);
// TODO Socket issue: TypeError: Cannot read property 'emit' of undefined
socket.on("user-connected", userId => {
    console.log('User connected: ' + userId);
})