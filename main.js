const closeForm = document.querySelector(".form .close");
const addBook = document.querySelector(".add-book");
const form = document.querySelector(".form");

let toggleForm = [closeForm, addBook];
toggleForm.map((item) => {
  item.addEventListener("click", () => {
    form.classList.toggle("show");
  });
});
