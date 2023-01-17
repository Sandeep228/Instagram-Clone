import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on(
    "sendNotification",
    ({ senderName, receiveName, type, user_uid }) => {
      io.emit("getNotifications", {
        senderName,
        receiveName,
        type,
        user_uid,
      });
    }
  );
});

io.listen(8000);
