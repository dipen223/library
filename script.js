const myLibrary = [];
const author = document.getElementById("author")
const title = document.getElementById("title")
const noOfPages = document.getElementById("pages")
const review = document.getElementById("review");
const addBtn = document.getElementById("addBtn");
const enterBtn = document.getElementById("enterBtn");
const booksContainer = document.getElementById("booksContainer");

function Book(title, author, pages, review) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.review = review;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, review) {
  let book = new Book(title, author, pages, review);
  myLibrary.push(book);
}

function displayBook() {
  addBookToLibrary(title.value, author.value, noOfPages.value, review.value);
  for(let book of myLibrary){
    booksContainer.innerHTML += `
    <div class="book" id="${book.id}">
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Review: ${book.review}</p>
      <button class="deleteBtn">Delete</button>
    </div>`;
  }
}


const dialog = document.querySelector("dialog");
enterBtn.addEventListener("click", () => {
  dialog.showModal();
});

addBtn.addEventListener("click",() =>{
  displayBook();
  dialog.close();
})