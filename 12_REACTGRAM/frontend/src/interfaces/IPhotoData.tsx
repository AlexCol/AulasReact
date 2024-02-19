export interface IPhotoData {
	_id?: string,
	image: File,
	title: string,
	likes?: string[],
	comments?: string[],
	userId?: string,
	userName?: string,
	createdAt?: Date,
	updatedAt?: Date
}