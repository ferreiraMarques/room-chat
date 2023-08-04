import { io } from "../config/config.js";
import { message } from "./message.event.js";

export function main() {
  console.log("connect client");
  io.on("connection", (socket) => {
    message(socket);
  });
}
