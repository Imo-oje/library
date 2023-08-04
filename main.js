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

const addBook = document.querySelector(".submit");

const selectInput = document.querySelectorAll("input");
const inputs = Array.from(selectInput);

function bookFactory(title, author, pages, date, status) {
  return { title, author, pages, date, status };
}

addBook.addEventListener("click", () => {
  const checkBox = document.querySelector("input[type='checkbox").checked;

  const book = bookFactory(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
    checkBox
  );
  console.log(checkBox);
  console.log(book.date); //inputs.indexOf(input)), input

  const div = document.createElement("div");
  div.innerHTML = `
  <div class="book-card">
    <div class="top">
      <p class="book-date">published: ${book.date}</p>
      <p class="book-pages">${book.pages} pages</p>
    </div>
    <div>
      <h3 class="author-name">${book.author}</h3>
      <div class="title-container">
        <h2 class="book-title">${book.title}</h2>
      </div>
      <button style="background: ${
        checkBox ? "#53f153" : "#e23030"
      };" class="button" id='button' >${checkBox ? "Read" : "Not read"}</button>
    </div>
</div>
  `;
  bookContainer.appendChild(div);
});
