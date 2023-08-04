import { Server as SocketServer } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: process.env.FRONT_URL,
  },
});

export { app, io, server };
