const http = require("http");
const express = require("express");
const app = express();

const servidorHTTP = http.createServer(app);
const io = require("socket.io")(servidorHTTP);



io.addListener("connection", (socket) => {
  console.log("conectado");
  socket.addListener("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });
});
app.use(express.static("public"));
servidorHTTP.listen(3000);
