//write constructor for making "Book" objects.
//requires title, author, pages, and whether you have or have not read the book
function makeBook(title, author, pages, read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.info = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'already read' : 'not read yet'}`;
};
}