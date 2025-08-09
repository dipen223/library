const myLibrary = [];
const author = document.getElementById("author");
const title = document.getElementById("title");
const noOfPages = document.getElementById("pages");
const review = document.getElementById("review");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const booksContainer = document.getElementById("booksContainer");
const dialog = document.querySelector("dialog");
const enterBtn = document.getElementById("enterBtn");

class Book {
  constructor() {
    this.id = crypto.randomUUID();
  }

  addBookToLibrary() {
    let book = {
      title: title.value,
      author: author.value,
      pages: noOfPages.value,
      review: review.value,
      id: crypto.randomUUID()
    };
    myLibrary.push(book);
  }

  displayBook() {
    booksContainer.innerHTML = "";
    for (let book of myLibrary) {
      booksContainer.innerHTML += `
      <div class="book" id=${book.id}>
        <h3>Title: ${book.title}</h3>
        <p class="author"><span>Author:</span> ${book.author}</p>
        <p class="pages"><span>Pages:</span> ${book.pages}</p>
        <p class="review"><span>Review:</span> ${book.review}</p>
        <button class="delete-btn" data-id="${book.id}">Delete</button>
      </div>`;
    }
  }

  deleteBook(event) {
    const bookId = event.target.getAttribute("data-id");
    const bookDiv = document.getElementById(bookId);
    if (bookDiv) {
      booksContainer.removeChild(bookDiv);
      const index = myLibrary.findIndex(b => b.id === bookId);
      if (index !== -1) {
        myLibrary.splice(index, 1);
      }
    }
  }
}

const bookManager = new Book();


enterBtn.addEventListener("click", () => {
  dialog.showModal();
});

addBtn.addEventListener("click", () => {
  bookManager.addBookToLibrary(); 
});

showBtn.addEventListener("click", () => {
  bookManager.displayBook();
  dialog.close();
});

booksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    bookManager.deleteBook(event);
  }
});
