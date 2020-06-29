import express from "express";
import { json, urlencoded } from "body-parser";
import { connect } from "./utils/db";

require("dotenv").config();
const uri = process.env.URI;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

export const start = async () => {
	try {
		await connect(uri);
		app.listen(4000, () => {
			console.log("Server running on PORT 4000");
		});
	} catch (e) {
		console.error(e);
	}
};
