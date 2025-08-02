const myLibrary = [];
const author = document.getElementById("author").value;
const title = document.getElementById("title").value;
const noOfPages = document.getElementById("pages").value;
const review = document.getElementById("review").value;
const addBtn = document.getElementById("addBtn");
const enterBtn = document.getElementById("enterBtn");
const booksContainer = document.getElementById("booksContainer");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${pages} pages, ${this.read}`;
  };
  let id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBook() {
  addBookToLibrary(title, author, noOfPages, review);
  booksContainer.innerHTML += `<div>
    <h2>Title: ${title}</h2>
    <p>Author: ${author}</p>
    <p>No of Pages: ${noOfPages}</p>
    <p>Review: ${review}</p>
  </div>`;
}

const dialog = document.querySelector("dialog");
enterBtn.addEventListener("click", () => {
  dialog.showModal();
});

addBtn.addEventListener("click", displayBook);
addBtn.addEventListener("click", () => {
  dialog.close();
});
