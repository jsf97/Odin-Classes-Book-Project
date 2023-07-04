let myLibrary = [];
let main = document.getElementById('main');

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

let thePitufo = new createBook('Pitufo', 'No se sabe', 235, false)

console.log(theHobbit.info())

function addBookToLibrary(book) {
  myLibrary.push(book.title);
}

addBookToLibrary(theHobbit)
addBookToLibrary(thePitufo)


function showBooks() {
  for (i = 0; i < myLibrary.length; i++) {
    let row = document.createElement('div');
    row.textContent = myLibrary[i]
    main.appendChild(row)
  }
}

showBooks()