import mongoose, { Schema } from "mongoose";

const photoSchema = new Schema (
	{
		image: {type: String},
		title: {type: String},
		likes: {type: Array},
		comments: {type: Array},
		userId: {type: mongoose.Types.ObjectId},
		userName: {type: String}
	}, {
		timestamps: true
	}
);

export const PhotoModel = mongoose.model("Photo", photoSchema);