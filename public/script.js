const socket = io("/");
const videoGrid = document.getElementById("video-grid");

const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});
const myVideo = document.createElement("video");
myVideo.muted = true; // Mutes ourselves so we don't hear our own audio
const peers = {};

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addVideoStream(myVideo, stream);

    // When someone enters into the call, answer the call with the current stream
    myPeer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    });
  });
socket.on("user-disconnected", userId => {
  // Closing the connection of the user that disconnected
  if(peers[userId]){
    peers[userId].close();
  }  // console.log(userId)
})
myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

// TEST CODE
// socket.on("user-connected", (userId) => {
//   console.log("User connected: " + userId);
// });

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream);
  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideoStream(video, userVideoStream);
  });
  // When user ends, remove that video
  call.on("close", () => {
    video.remove();
  });
  // Connecting every userId to a call that is made
  peers(userId) = call;
}
// Once video is loaded on page, play the video
function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}
