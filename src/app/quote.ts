export class Quote {
    id:number;
    quote:string;
    upvotes:number;
    downvotes:number;
    user: string;
    author:string;
    dateposted!:Date
    constructor(id:number, quote:string, upvotes:number ,downvotes:number, dateposted:Date,user:string, author:string) {
    // initializing
    this.id = id;
    this.quote = quote;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.user = user;
    this.author= author;
    this.dateposted= dateposted;
    

}
}
