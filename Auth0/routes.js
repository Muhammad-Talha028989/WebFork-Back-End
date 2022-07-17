const express = require("express");

const auth0Router = express.Router();

auth0Router.get("/", (req, res) => {
  res?.send(req?.oidc?.user);
});

module.exports = auth0Router;
