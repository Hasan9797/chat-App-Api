import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './config/connect_db.js';

config();
const app = express();
import errorHandling from './middleware/errorHandling.js';
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.use(errorHandling);

function server() {
	connectDB();
	app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
}
server();
