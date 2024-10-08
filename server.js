require('dotenv').config();
const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(port, () => {
  console.log("The server is up and running in: 3001");
}); 
