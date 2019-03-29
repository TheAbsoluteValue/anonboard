const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const hat = require('hat');

const Message = require('./models/Message');
const { username, password } = require('./config.json');
const PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

mongoose.connect(`mongodb://${username}:${password}@ds117866.mlab.com:17866/aboard`,{ useNewUrlParser: true });

const db = mongoose.connection;

db.once("open", () => console.log("Connected"));

db.on("error", console.error.bind(console, "Failed to connect"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/test", (req, res) => {
	return res.send("Works!");
});

router.get("/getMessages", (req, res) => {
	Message.find((err, messages) => {
		if (err) return res.send({ success: false, err });
		return res.send({ success: true, messages });
	});
});

router.delete("/deleteMessage", (req, res) => {
	const { id } = req.body;
	Message.findOneAndDelete(id, err => {
		if (err) return res.send(err);
		return res.send({ success: true });
	});
});

router.post("/sendMessage", (req, res) => {
	const message = new Message();
	const { content } = req.body;

	if (!message)
		return res.send({success: false, error: "No message"});

	message.message = content;
	message.date = String(new Date());
	message.id = hat();
	console.log(`id = ${message.id}`);
	message.save(err => {
		if (err) return res.send({ success: false, error: err });
		return res.send({ success: true });
	});
});

app.use("/api", router);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));