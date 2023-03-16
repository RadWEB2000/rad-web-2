const express = require("express");
const next = require("next");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const expressApp = require("./pages/api/express.js");

app.prepare().then(() => {
	const server = express();
	server.use(express.json());
	server.use("/api", expressApp);
	server.get("*", (req, res) => handle(req, res));
	server.listen(3000, () => {
		console.log("Server listening on port 3000");
	});
});
