require("dotenv").config();
const express = require("express");
const cors = require("cors");

const server = express();

server.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }),
);

let port = process.env.PORT || process.env._ALT_PORT;

server.get("/", async (req, res) => {
  res.send("<h1>HI</h1>");
});

server.listen(port, () => console.log(`server running at port ${port}`));
