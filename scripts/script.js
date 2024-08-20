const myLibrary = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    read: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: false,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    read: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: false,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    pages: 635,
    read: true,
  },
];

function displayBooks() {
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const removeButton = document.createElement("button");
    removeButton.textContent = "❌";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
      bookDiv.remove();
    });
    bookDiv.appendChild(removeButton);

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "Author: " + book.author;

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = "Pages: " + book.pages;

    const read = document.createElement("p");
    read.classList.add("read");
    read.textContent = book.read ? "Yes" : "No";

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(read);
    document.querySelector("#books").appendChild(bookDiv);
  });
}

displayBooks();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read =
    document.querySelector('input[name="read"]:checked')?.value === "yes"
      ? true
      : false;
  addBookToLibrary(title, author, pages, read);
  form.reset();
  document.querySelector("#books").innerHTML = "";
  displayBooks();
});
