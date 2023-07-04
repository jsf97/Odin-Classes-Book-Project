let myLibrary = [];

function createBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
  this.info = function(){
    return `${this.title} by ${this.author}, ${pages} pages, ${this.read ? 'readed' : 'not readed'}`;
  }
}

let theHobbit = new createBook('The Hobbit', 'J.R.R. Tolkien', 295, false)

console.log(theHobbit.info())

function addBookToLibrary(book) {
  myLibrary.push(book.title);
}

addBookToLibrary(theHobbit)

console.log(myLibrary)