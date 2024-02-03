export interface IDocument {
    id?: string,
    title: string,
    image: string,
    body: string,
    tags: string[],
    uid: string,
    createdBy: string
}