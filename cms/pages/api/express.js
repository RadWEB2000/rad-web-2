const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello from Express.js!");
});

module.exports = app;
