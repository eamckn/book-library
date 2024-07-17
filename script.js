// JS for book library project

// DOM element selectors

const libraryDisplay = document.querySelector(".library-display-wrapper");
const addBookButton = document.querySelector(".add-book");

// Event listeners
addBookButton.addEventListener("click", makeNewBook);

// Initialize library, i.e an array of books
const myLibrary = [];

// Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function definitions
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooksInLibrary() {
    for (const book of myLibrary) {
        const newBook = document.createElement("div");
        newBook.className = "book";
        // console.log(typeof(book))
        for (const prop in book) {
            // console.log(`${prop}: ${book[prop]}`);
            const newLine = document.createElement("p");
            newLine.textContent = `${prop}: ${book[prop]}`;
            newBook.appendChild(newLine);
        }
        libraryDisplay.appendChild(newBook);
    }
}

function makeNewBook(event) {
    let title = document.querySelector("input#title").value;
    let author = document.querySelector("input#author").value;
    let pages = document.querySelector("input#pages").value;
    let read = document.querySelector("input[name = 'has_read']:checked").value;

    addBookToLibrary(title, author, pages, read);

    event.preventDefault();
}

// Initialize some books in myLibrary
myLibrary.push(new Book("My book", "Eamon McKeon", 100, "yes"));
myLibrary.push(new Book("Justin's book", "Justin Lee", 350, "no"));
myLibrary.push(new Book("Avery's book", "Avery Coreschi", 200, "yes"));