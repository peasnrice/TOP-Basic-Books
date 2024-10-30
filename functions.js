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
const libraryContainer = document.getElementById("library-container");

// Preloaded books 
const preloadedBooks = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
    new Book("To Kill a Mockingbird", "Harper Lee", 324, true),
    new Book("1984", "George Orwell", 328, false),
    new Book("Pride and Prejudice", "Jane Austen", 279, true),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false),
    new Book("Moby-Dick", "Herman Melville", 585, false),
    new Book("War and Peace", "Leo Tolstoy", 1225, true),
    new Book("Ulysses", "James Joyce", 730, false),
    new Book("The Catcher in the Rye", "J.D. Salinger", 214, true),
    new Book("The Odyssey", "Homer", 475, true),
    new Book("Brave New World", "Aldous Huxley", 268, false),
    new Book("The Brothers Karamazov", "Fyodor Dostoevsky", 824, true),
];

preloadedBooks.forEach(book => myLibrary.push(book));
displayBooks();


function displayBooks() {
    libraryContainer.innerHTML = "";  // Clear the container
    for (const [index, book] of myLibrary.entries()) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.setAttribute("id", `book-card-${index}`);

        const title = document.createElement("p");
        title.innerText = `Title: ${book.title}`;

        const author = document.createElement("p");
        author.innerText = `Author: ${book.author}`;

        const pageCount = document.createElement("p");
        pageCount.innerText = `Pages: ${book.pages}`;

        const readStatus = document.createElement("p");
        readStatus.innerText = book.read ? "Read" : "Not Read";
        readStatus.setAttribute("id", `read-status-${index}`)

        const removeBtn = document.createElement("button");
        removeBtn.innerText = `Delete`;
        removeBtn.setAttribute("id", `delete-card-${index}`)

        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.innerText = "Toggle Read";
        toggleReadBtn.setAttribute("id", `toggle-read-${index}`);

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pageCount);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(toggleReadBtn);
        bookCard.appendChild(removeBtn);

        libraryContainer.appendChild(bookCard);
    }
}

const addBookButton = document.getElementById("add-book");


const displayNewBookFormBtn = document.getElementById("display-new-book-form");
const closeDialogBtn = document.getElementById("close-dialog");
const bookForm = document.getElementById("book-form-dialog");

displayNewBookFormBtn.addEventListener("click", () => {
    bookForm.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    bookForm.close();
});

addBookButton.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent form from auto-submitting

    // Get form data
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = document.getElementById("book-pages").value;
    const read = document.getElementById("book-read").checked;

    // Create new book and add it to the library
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    // Update the library display and close the dialog
    displayBooks();
    bookForm.close();

    // Reset the form fields
    document.getElementById("book-form").reset();
});

libraryContainer.addEventListener("click", (event) => {
    const target = event.target;

    if (target.id.startsWith("delete-card")) {
        const index = parseInt(target.id.replace("delete-card-", ""), 10);

        myLibrary.splice(index, 1);

        displayBooks();
    }

    if (target.id.startsWith("toggle-read")) {
        const index = parseInt(target.id.replace("toggle-read-", ""), 10);
        myLibrary[index].read = !myLibrary[index].read;

        displayBooks();
    }

})