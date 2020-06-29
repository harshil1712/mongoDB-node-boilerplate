import mongoose from "mongoose";

export const connect = (uri) => {
	return mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};
