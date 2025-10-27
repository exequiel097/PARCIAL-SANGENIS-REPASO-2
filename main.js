const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Alguien me hizo un request");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log("Escuchando el puerto 3000");
});