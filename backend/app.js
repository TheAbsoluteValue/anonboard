import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { username, password}  from './config';
import Message from './models/Message';
import hat from 'hat';

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

router.get("/getMessages", (req, res) => {
	Message.find((err, messages) => {
		if (err) return res.json({ success: false, err });
		return res.json({ success: true, messages });
	});
});

router.delete("/deleteMessage", (req, res) => {
	const { id } = req.body;
	Message.findOneAndDelete(id, err => {
		if (err) return res.send(err);
		return res.json({ success: true });
	});
});

router.post("/sendMessage", (req, res) => {
	const message = new Message();
	const { content } = req.body;

	if (!message) {
		return res.json({
			success: false,
			error: "No message"
		});
	}

	message.message = content;
	message.date = String(new Date());
	message.id = hat();
	message.save(err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

app.use("/api", router);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));