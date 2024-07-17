// JS for book library project

// DOM element selectors

const libraryDisplay = document.querySelector("'library-display-wrapper");

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
function addBookToLibrary() {
    let title = prompt("What is the title of the book you'd like to add to your library?");
    let author = prompt("What's the name of the author?");
    let pages = prompt("How many pages is the book? (please enter a number)");
    let read = prompt("Have you had this book already? Please answer 'yes' or 'no.'");
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooksInLibrary(myLibrary) {
    for (book in myLibrary) {
        libraryDisplay.appendChild(book);
    }
}