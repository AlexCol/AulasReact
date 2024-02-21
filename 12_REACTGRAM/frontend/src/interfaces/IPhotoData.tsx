import { ICommentData } from "./ICommentData";

export interface IPhotoData {
	_id?: string,
	image: File,
	title: string,
	likes?: string[],
	comments?: ICommentData[],
	userId?: string,
	userName?: string,
	createdAt?: Date,
	updatedAt?: Date
}