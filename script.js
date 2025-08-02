const myLibrary = [];
const author = document.getElementById("author");
const title = document.getElementById("title");
const noOfPages = document.getElementById("pages");
const review = document.getElementById("review");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const booksContainer = document.getElementById("booksContainer");

function Book(title, author, pages, review) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.review = review;
  this.id = crypto.randomUUID();
}

function addBookToLibrary() {
  let book = new Book(title.value, author.value, pages.value, review.value);
  myLibrary.push(book);
}

function displayBook() {
  booksContainer.innerHTML = "";
  for (let book of myLibrary) {
    booksContainer.innerHTML += `
    <div class="book" id=${book.id}>
    <h3>Title: ${book.title}</h3>
    <p class="author"><span>Author:</span>${book.author}</p>
    <p class="pages"><span>Pages:</span>${book.pages}</p>
    <p class="review"><span>Review:</span>${book.review}</p>
    <button class="delete-btn" data-id="${book.id}">Delete</button>
    </div> `;
  }
}

const dialog = document.querySelector("dialog");
enterBtn.addEventListener("click", () => {
  dialog.showModal();
});

addBtn.addEventListener("click", () => {
  addBookToLibrary();
});

showBtn.addEventListener("click", () => {
  displayBook();
  dialog.close();
});

function deleteBook(event) {
  const bookId = event.target.getAttribute("data-id");
  const bookDiv = document.getElementById(bookId);
  if (bookDiv) {
    booksContainer.removeChild(bookDiv);
  }
}

booksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteBook(event);
  }
});
