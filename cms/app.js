const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const hbs = handlebars.create({
	extname: "hbs",
	defaultLayout: "main",
	layoutsDir: __dirname + "/views/layouts",
	partialsDir: __dirname + "/views/parts",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.get("/", (req, res) => {
	res.render("home");
});
app.get("/login", (req, res) => {
	res.render("login");
	console.log(req.raw.body);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/login", (req, res) => {
	const fieldData = req.body;
	console.log(fieldData);
	res.render("form-data", { fieldData });
});
app.listen(port);
