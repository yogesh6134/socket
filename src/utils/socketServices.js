import { io } from "socket.io-client";
const socketServices = io.connect("https://local.host:3000/admin", {
  transports: ["websocket"],
  // reconnection: true, // enable reconnection
  // reconnectionDelay: 1000, // the time to wait before attempting a new reconnection
  // reconnectionAttempts: Infinity, // the number of reconnection attempts before giving up
});
export default socketServices;
