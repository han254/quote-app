export class Quote {
    // showinfo: boolean;
    id:number;
    quote:string;
    upvotes:number;
    downvotes:number;
    user: string;
    author:string;
    dateposted:Date
    // info!: string;
    constructor(id:number, quote:string, upvotes:number ,downvotes:number, dateposted:Date,user:string, author:string) {
    // initializing
    this.id = id;
    this.quote = quote;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.user = user;
    this.author= author;
    this.dateposted= dateposted;
    // this.showinfo=false;
    

}
}
