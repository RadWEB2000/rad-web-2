import mysql from "mysql";

const connection = mysql.createConnection({
	host: "localhost",
	user: "radoslaw_adamczyk",
	password: "bVJMFrYnM4A9vdEdegTwGzC",
	database: "radwebcms",
});

connection.connect((err) => {
	if (err) {
		console.error(`Error connecting: ${err.stack}`);
		return;
	}
	console.log(`Connected to database as id: ${connection.threadId}`);
});

export default connection;
