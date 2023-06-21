const controller = require("../controllers/app.controller");
const routes = require("express").Router();


routes.get("/portfolio", controller.portfolioAppRoute);


module.exports = routes