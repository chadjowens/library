const myLibrary = [];  // create an array to hold book objects

// const book1 = new Book("The Hobbit", "JRR Tolkien", 354, true);
// const book2 = new Book("EJS", "Marijn Haverbeke", 450, false);
// const book3 = new Book("ChatGPT", "Neil Dagger", 103, "read");

// myLibrary.push(book1, book2, book3);

function bookInfo(myLibrary) { 
    // display book info in HTML and console if already exists 
    // loop through myLibrary array and display book info for each book
    for (let i = 0; i < myLibrary.length; i++) { 
        // let bookInfo = []; // create an array to hold book info
        // bookInfo = myLibrary[i]; // set bookInfo to the current book in the array
        console.log("////////////////// from bookInfo() ////////////");
        console.log(myLibrary.length);
        console.log("//////////////////");
        console.log(myLibrary[i]);
        console.log("//////////////////");
    }
}

bookInfo(myLibrary); // Initailly calls bookInfo function and adds existing books to the page

const dialog = document.querySelector("dialog");
const addBook = document.getElementById("add_book");
addBook.addEventListener('click', function() {
    
    dialog.showModal();
    document.getElementById("modal_form").reset();
    // document.getElementById("modal_form").reset();
});
// Same as above but using arrow function
// addBook.addEventListener("click", () => {
// dialog.showModal();
// });

// "Close" button closes the dialog
const closeButton = document.getElementById("close");
closeButton.addEventListener('click', function() {
    dialog.close();
});
// Same as above but using arrow function
// closeButton.addEventListener("click", () => {
// dialog.close();
// });

// Book Object Constructor -- returning the value of the function
function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
  }

Book.prototype.info = function() {
    return `${this.Title}, By: ${this.Author}, ${this.Pages} pages, ${this.Read ? 'I read it!' : 'Not read yet'}`;
}

let submitButton = document.getElementById("submit");

submitButton.addEventListener('click', function() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    if (read === "read") {
        read = true;
    }
    else if (read === "not read") {
        read = false;
    }   

    // New Book object
    let book = new Book(title, author, pages, read);
    bookNew = book.info();
    console.log(bookNew);
    console.log(typeof(bookNew));

    addToDisplay(bookNew)  // Calls function to display the book on the screen upon submit
    myLibrary.push(book); // pushes book into myLibrary array
    bookInfo(myLibrary); // Initailly calls bookInfo function and adds existing books to the page
}); 
// // *** function to add book info taken from user input and push into myLibrary array
// function addBookToLibrary() {
//     // *** User input to add book info ***
//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value;
//     let pages = document.getElementById("pages").value;
//     let read = document.getElementById("read").value;

//     const bookNew = new Book(title, author, pages, read);
 
function addToDisplay(bookNew) {  
    // *** creates a new paragraph element and appends it to the card_container div
    let element = document.getElementById("card_container");
    let newDiv = document.createElement("div");
    newDiv.classList.add("new_div");
    element.appendChild(newDiv);

    let newP = document.createElement("p");
    newP.classList.add("new_p");
    // element.appendChild(newP);

    let newBtn = document.createElement("button");
    newBtn.type = "button";
    newBtn.className = "new_btn";
    newBtn.value = "Remove";
    newBtn.id = "remove";
    newBtn.textContent = "Remove";
    // element.appendChild(newBtn);

    // // Add an event listener to the button
    newBtn.addEventListener("click", function() {
    // // 'this' refers to the button that was clicked
    // // 'parentNode' is the div containing the button
    this.parentNode.remove();
    });

    // Formats string and displays in HTML via innerHTML
    bookNew = bookNew.trim();
    bookNew = bookNew.replace(/,/g, "\n");
    // newP.innerHTML = bookNew;
    newP.innerHTML = bookNew;
    newDiv.appendChild(newP);
    newDiv.appendChild(newBtn);

    dialog.close();
    // info();
}
