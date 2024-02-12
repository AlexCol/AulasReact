import mongoose, { Schema } from "mongoose";

const userSchema = new Schema (
	{
		name: {type: String},
		email: {type: String},
		password: {type: String},
		profileImage: {type: String},
		bio: {type: String}
	}, {
		timestamps: true
	}
);

export const UserModel = mongoose.model("User", userSchema);