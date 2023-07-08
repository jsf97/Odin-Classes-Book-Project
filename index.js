let myLibrary = [];
let main = document.querySelector('.right-side')
let table = document.querySelector('.table')

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(thePitufo);


function showBooks() {
  myLibrary.forEach((e) => {
    let values = Object.values(e);
    let newRow = document.createElement('tr');
    for(let i = 0; i < values.length - 1; i++) {
      let newData = document.createElement('td');
      newData.textContent = values[i];
      newRow.appendChild(newData);
    }
    table.appendChild(newRow);
  });
}

showBooks();

button = document.createElement = 'button';