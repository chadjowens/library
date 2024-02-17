const myLibrary = [];  // create an array to hold book objects

const book1 = new Book("The Hobbit", "JRR Tolkien", 354, true);
const book2 = new Book("EJS", "Marijn Haverbeke", 450, false);
const book3 = new Book("ChatGPT", "Neil Dagger", 103, "read");

myLibrary.push(book1, book2, book3);

function bookInfo(myLibrary) { // display book info in HTML and console
    // loop through myLibrary array and display book info for each book
    console.log(myLibrary.length);
    console.log("//////////////////");
    for (let i = 0; i < myLibrary.length; i++) { // loop through myLibrary array
        let bookInfo = []; // create an array to hold book info
        bookInfo = myLibrary[i]; // set bookInfo to the current book in the array
        console.log(bookInfo);  // display book info in console

        // *** creates a new paragraph element and appends it to the card_container div
        let element = document.getElementById("card_container");
        let newP = document.createElement("p");
        newP.classList.add("new_p");
        element.appendChild(newP);
    
        // Converts object to string, formats string and displays in HTML via innerHTML
        let objToStr = JSON.stringify(bookInfo);
        objToStr = objToStr.trim();
        objToStr = objToStr.replace(/[""(){}]/g, "");
        objToStr = objToStr.replace(/\s*:\s*/g, ": ");
        objToStr = objToStr.replace(/,/g, "\n");
        newP.innerHTML = objToStr;
        console.log(objToStr);
    }
}
bookInfo(myLibrary); // Initailly calls bookInfo function and adds existing books to the page

// let addBook = document.getElementById("add_book");

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("add_book");
// const closeButton = document.querySelector("close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
dialog.showModal();
});

// "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
// dialog.close();
// });

// Book Object Constructor -- returning the value of the function
function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
    if (read === "Read" || read === "read") {
        this.Read = true;
    } else if (read === "Unread" || read === "unread" || read === "Not read") {
        this.Read = false;
    }
    if (this.Read === true) {
        this.Read = "I read it!";  
     }
     else {
         this.Read = "I haven't read it!";
     }
  }

// *** function to add book info taken from user input and push into myLibrary array
function addBookToLibrary() {

    // *** User input to add book info ***
    // let title = prompt("Enter Book Title:");
    // let author = prompt("Enter Book Author:");
    // let pages = prompt("Enter Number of Pages:");
    // let read = prompt("Read or Unread?");

    const bookNew = new Book(title, author, pages, read);
    console.log(bookNew);
    myLibrary.push(bookNew);
    console.log(myLibrary.length);

    // *** creates a new paragraph element and appends it to the card_container div
    let element = document.getElementById("card_container");
    let newP = document.createElement("p");
    newP.classList.add("new_p");
    element.appendChild(newP);

    // Converts object to string, formats string and displays in HTML via innerHTML
    let objToStr = JSON.stringify(bookNew);
    objToStr = objToStr.trim();
    objToStr = objToStr.replace(/[""(){}]/g, "");
    objToStr = objToStr.replace(/\s*:\s*/g, ": ");
    objToStr = objToStr.replace(/,/g, "\n");
    newP.innerHTML = objToStr;
    console.log(objToStr);
}