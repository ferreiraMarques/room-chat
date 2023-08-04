export function message(socket) {
  socket.on("message", (body) => {    
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(6),
    });
  });
}
