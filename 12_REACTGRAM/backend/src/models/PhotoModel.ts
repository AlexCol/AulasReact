import mongoose, { Schema } from "mongoose";

const photoSchema = new Schema (
	{
		image: {type: String}, //pra salvar a imagem image no banco: {type: Buffer},
		imageByte: {type: Buffer},
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