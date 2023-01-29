const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const viewsPath = path.join(__dirname, "views");
console.log(viewsPath);

app.engine;

app.get("/", (req, res) => {
	res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <header>
                <nav>
                    <p>RadWEB CMS</p>
    
                    <a href="https://rad-web.vercel.app">RadWEB</a>
                    <a href="/login">Zaloguj</a>
                </nav>
            </header>
        </body>
    </html>
    `);
});
app.get("/login", (req, res) => {
	res.send("login");
});
app.get("/panel", (req, res) => {
	res.send("panel");
});
app.get("/panel/artykuly", (req, res) => {
	res.send("artykuly");
});
app.get("/panel/strony", (req, res) => {
	res.send("strony");
});
app.get("/ustawienia", (req, res) => {
	res.send("ustawienia");
});
app.listen(3000, () => {
	// console.log("Home Page");
});
