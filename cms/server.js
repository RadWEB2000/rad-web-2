const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const expressApp = require("./pages/api/express.js");
const apiRoutes = require("./routes/apiRoutes");

app.prepare().then(() => {
	const server = express();
	server.use(express.json());
	server.use("/api", expressApp);
	server.get("*", (req, res) => handle(req, res));
	server.listen(3000, () => {
		console.log("Server listening on port 3000");
	});
});

app.get(apiRoutes.hello, (req, res) => {
	res.send({ message: "Hello from Express.js!" });
});
