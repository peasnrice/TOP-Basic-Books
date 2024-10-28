console.log("Successfully loaded `functions.js`")

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`)
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 324, true);
const book3 = new Book("1984", "George Orwell", 328, false);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 279, true);
const book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
const book6 = new Book("Moby Dick", "Herman Melville", 585, false);
const book7 = new Book("War and Peace", "Leo Tolstoy", 1225, true);
const book8 = new Book("Ulysses", "James Joyce", 730, false);
const book9 = new Book("The Catcher in the Rye", "J.D. Salinger", 214, true);
const book10 = new Book("The Odyssey", "Homer", 475, true);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);


const libraryContainer = document.getElementById("library-container")
for (const book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("p");
    title.innerText = book.title;

    const author = document.createElement("p");
    author.innerText = book.author;

    const pageCount = document.createElement("p");
    pageCount.innerText = book.pages;

    const readStatus = document.createElement("p");
    readStatus.innerText = book.read ? "already read" : "not read yet";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pageCount);
    bookCard.appendChild(readStatus);

    libraryContainer.appendChild(bookCard);
}

const addBookButton = document.getElementById("#add-book");

