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
        // Create div for each book with necessary attributes
        const newBook = document.createElement("div");
        newBook.className = "book";
        newBook.setAttribute("data-index", `${myLibrary.indexOf(book)}`);
        // Create removeBookButton for each div
        const removeBookButton = document.createElement("button");
        removeBookButton.setAttribute("data-index", `${myLibrary.indexOf(book)}`);
        removeBookButton.addEventListener("click", removeBook);
        removeBookButton.textContent = "Remove Book";
        // Add it as a child to the newBook div
        newBook.appendChild(removeBookButton);
        // Display all properties and value on the book
        for (const prop in book) {
            const newLine = document.createElement("p");
            newLine.textContent = `${prop}: ${book[prop]}`;
            newBook.appendChild(newLine);
        }
        // Create toggleReadButton for each div
        const toggleReadButton = document.createElement("button");
        toggleReadButton.setAttribute("data-index", `${myLibrary.indexOf(book)}`);
        toggleReadButton.addEventListener("click", toggleRead);
        toggleReadButton.textContent = "Toggle read status";
        newBook.appendChild(toggleReadButton);

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

function removeBook(event) {
    let index = "'" + this.getAttribute("data-index") + "'";
    let bookToRemove = document.querySelector(`div[data-index= ${index}]`);

    bookToRemove.remove();
}

function toggleRead(event) {
    let index = this.getAttribute("data-index");
    // access this index in library, save into variable
    let bookToToggle = myLibrary[index];
    console.log(bookToToggle);
    bookToToggle["read"] === "yes" ? bookToToggle["read"] = "no" :
                                   bookToToggle["read"] = "yes";
    console.log(bookToToggle);
    // if read is yes, change to no, if not, change to yes
    // add quotes to index to allow for DOM access
    // select the div whose read button was just changed
    // change its text content through loop


    
}

// Initialize some books in myLibrary
myLibrary.push(new Book("My book", "Eamon McKeon", 100, "yes"));
myLibrary.push(new Book("Justin's book", "Justin Lee", 350, "no"));
myLibrary.push(new Book("Avery's book", "Avery Coreschi", 200, "yes"));

displayBooksInLibrary();

/* 
For adding a remove book button for each book:
1. Assign each book an ID that corresponds to its index in the array when it's made
1. Create a button within the book div when it's added, same ID as its book
2. Target it within the DOM
2. Position it roughly where I want it
3. Add an event listener to it to remove the book
*/