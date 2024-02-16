const myLibrary = [];

const book1 = new Book("The Hobbit", "JRR Tolkien", 354, true);
const book2 = new Book("EJS", "Marijn Haverbeke", 450, false);
const book3 = new Book("ChatGPT", "Neil Dagger", 103, true);

myLibrary.push(book1, book2, book3);

// *** User input to add book info
// let title = prompt("Enter Book Title:");
// let author = prompt("Enter Book Author:");
// let pages = prompt("Enter Number of Pages:");
// let read = prompt("Read or Unread?");

function bookInfo(myLibrary) {
    // loop through myLibrary array and display book info for each book
    console.log(myLibrary.length);
    console.log("//////////////////");

    for (let i = 0; i < myLibrary.length; i++) {
        // console.log(myLibrary[i]);
        let bookInfo = [];
        bookInfo = myLibrary[i];
        // console.log("Book Info", bookInfo);

        let element = document.getElementById("header_box");
        // console.log("Element Info", element);
    
        let newP = document.createElement("p");
        newP.classList.add("new_p");
    
        element.appendChild(newP);
        
        // function objToStr(obj) {
        //     return JSON.stringify(obj);
        //   } *** This could done as a function

        let objToStr = JSON.stringify(bookInfo);
        objToStr = objToStr.replace(/[""(){}]/g, " ");
        // objToStr = objToStr.replace(/[:]/g, ":");
        objToStr = objToStr.replace(/\s*:/g, ":");
        objToStr = objToStr.replace(/\s*,/g, ",");

        newP.innerHTML = objToStr;

        console.log("Book Info", bookInfo);
        console.log(typeof(bookInfo));
        console.log(objToStr);
    }
}

bookInfo(myLibrary);

///////////////////////
// Book Object Constructor -- returning the value of the function
function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
    //   this.addBookToLibrary = function() {
    //        myLibrary.push(title, author, pages, read);
    // this.bookInfo = function() {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    // }
  }

// *** function to add book info taken from user input and push into myLibrary array
// function addBookToLibrary() {
//     myLibrary.push(title, author, pages, read);
// }

// *** function called to push user info into array
// addBookToLibrary();
