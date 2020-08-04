export class PostModel {
    constructor(
    public title: string,
    public authorID: string,
    public author: string,
    public description: string,
    public published: Date,
    public image:string){}

}