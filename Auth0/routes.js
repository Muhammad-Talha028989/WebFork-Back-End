const express = require("express");

const auth0Router = express.Router();

auth0Router.get("/", (req, res) => {
  res?.send(req?.oidc?.isAuthenticated());
});

module.exports = auth0Router;
