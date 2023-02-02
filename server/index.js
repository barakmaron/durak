import app from "./app.js";

app.listen(process.env.PORT, (port) => {
	console.log(`HTTP Server running on port ${port}`);
});