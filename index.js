require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { auth } = require("express-openid-connect");
const server = express();
const config = require("./Auth0/index");
const auth0Router = require("./Auth0/routes");

//* auth router attaches /login, /logout, and /callback routes to the baseURL
server.use(auth(config));

server.use(cors());

let port = process.env.PORT || process.env._ALT_PORT;

//* req.isAuthenticated is provided from the auth router

server.use("/", auth0Router);


server.listen(port, () => console.log(`server running at port ${port}`));
