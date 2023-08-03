const form = document.querySelector(".form");
const showForm = document.querySelector(".add-book");
const closeForm = document.querySelector(".form .close");
const bookContainer = document.querySelector(".book_container");

let toggleForm = [closeForm, showForm];
toggleForm.map((item) => {
  item.addEventListener("click", () => {
    form.classList.toggle("show");
  });
});

// MAIN //

function setbook(title, author, pages, date, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.image = image;
}

const addBook = document.querySelector(".submit");
addBook.addEventListener("click", () => {
  const book = new setbook(
    document.querySelector('#title').value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#date").value,
    "image"
  );
  const books = document.createElement("div");
  books.classList.add("books");
  books.innerHTML = `
    <span>${book.title}</span>
    <h2>${book.author}</h2>
    <span>${book.pages}</span>
    <button class="book-status">${book.read}</button>
  `;

  bookContainer.appendChild(books);
});
