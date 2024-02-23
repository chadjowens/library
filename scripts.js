const myLibrary = [];  // create an array to hold book objects

// *** Variables for Book object to be pre-populated
// const book1 = new Book("The Hobbit", "JRR Tolkien", 354, true);
// const book2 = new Book("EJS", "Marijn Haverbeke", 450, false);
// const book3 = new Book("ChatGPT", "Neil Dagger", 103, "read");
// myLibrary.push(book1, book2, book3);

// function bookInfo(myLibrary) { 
//     // display book info in HTML and console if already exists 
//     // loop through myLibrary array and display book info for each book
//     for (let i = 0; i < myLibrary.length; i++) { 
//         // let bookInfo = []; // create an array to hold book info
//         // bookInfo = myLibrary[i]; // set bookInfo to the current book in the array
//         // console.log("////////////////// from bookInfo() ////////////");
//         // console.log(myLibrary.length);
//         // console.log("//////////////////");
//         // console.log(myLibrary[i]);
//         // console.log("//////////////////");
//     }
// }

// bookInfo(myLibrary); // Initailly calls bookInfo function and adds existing books to the page

const dialog = document.querySelector("dialog");
const addBook = document.getElementById("add_book");

addBook.addEventListener('click', function() {
    dialog.showModal();
    document.getElementById("modal_form").reset();
});

// "Close" button closes the dialog
const closeButton = document.getElementById("close");
closeButton.addEventListener('click', function() {
    dialog.close();
});

// Book Object Constructor -- returning the value of the function
function Book(title, author, pages, read) {
    // this.BookId = bookId;
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

Book.prototype.info = function() { // Function to return book info
    return `${this.Title},By: ${this.Author},${this.Pages} pages,${this.Read ? 'I read it!' : 'Not read yet'}`;
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', function() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let checkbox = document.getElementById('read');
    let read = checkbox.checked;
        checkbox.addEventListener('change', function() {
            read = checkbox.checked;
    });
    // console.log("/////////From Submit Button/////////");
    // console.log(read);

    // New Book object
    // let bookId = 0; // Not sure if this goes here
    let book = new Book(title, author, pages, read); // new instance of Book object
    bookNew = book.info();  // calls info method to display book info as a string

    addToDisplay(book, bookNew)  // Calls function to display the book on the screen upon submit
    myLibrary.push(book); // Pushes book into myLibrary array
    // bookInfo(myLibrary); // Initially calls bookInfo function and adds existing books to the page
    // bookId++; // Increment the bookId each time a new book instance is created
}); 
 
let bookId = 0; // Add this line at the start of your script

function addToDisplay(book, bookNew) {  
    // *** creates a new paragraph element and appends it to the card_container div
    console.log(bookId);
   
    let element = document.getElementById("card_container");
    let newDiv = document.createElement("div");
    newDiv.classList.add("new_div");
    newDiv.id = 'book-' + bookId; // Assign a unique ID to each book instance
    element.appendChild(newDiv); // Append newDiv to the card_container div
    // document.body.appendChild(newDiv); // Make sure to append newDiv to the DOM

    let newP = document.createElement("p");
    newP.classList.add("new_p");

    let newBtn = document.createElement("button");
    newBtn.type = "button";
    newBtn.className = "new_btn";
    newBtn.value = "Remove";
    newBtn.id = "remove";
    newBtn.textContent = "Remove";

    // Add an event listener to the newBtn
    newBtn.addEventListener("click", function() {
    this.parentNode.remove();
    });

    let readStatus = document.createElement("button");
    readStatus.type = "button";
    readStatus.className = "read_status";
    readStatus.value = "Read Status";
    readStatus.id = "readStatus";
    readStatus.textContent = "Read / Not Read";
    readStatus.dataset.bookId = bookId; // Store the bookId in a data attribute

    readStatus.addEventListener("click", function() {
    // function called to update status
    // updateStatus(book, bookNew, 'book-' + bookId);
    // Retrieve the bookId from the data attribute
    let bookId = this.dataset.bookId; // Get the bookId from the data attribute
    updateStatus(book, bookNew, bookId);
    // bookId++; // Increment the bookId each time a new book instance is created
    });
    
    // Formats string and displays in HTML via innerHTML
    bookNew = bookNew.trim();
    bookNew = bookNew.replace(/,/g, "\n");
    newP.innerHTML = bookNew;
    newDiv.appendChild(newP);
    newDiv.appendChild(newBtn);
    newDiv.appendChild(readStatus); // Append the button to newDiv
    console.log("/////////From BEFORE Update Status Function/////////");
    console.log(book);
    console.log(bookNew);
    console.log(bookId);
    // bookId++; // Increment the bookId each time a new book instance is created
    console.log(bookId);
    dialog.close();
    bookId++; // Increment the bookId each time a new book instance is created
}

// newDiv.appendChild(readStatus); // Append the button to newDiv

function updateStatus(book, bookNew, bookId) {
    book.Read = !book.Read;
    let parent = document.getElementById('book-' + bookId); // Use the bookId to select the correct book instance
    console.log(parent);

    if (parent) { // Check if parent is not null
        let oldChild = parent.getElementsByClassName('new_p')[0]; // Get the first child of the parent

        if (oldChild) { // Check if oldChild is not null
            let newChild = document.createElement('p'); // Create a new child
            newChild.classList.add("new_p"); // Add a class to the new child
            // newChild.textContent = "Updated status";
            let updateReadStatus = book.info(); // Calls info method to display book info as a string
            updateReadStatus = updateReadStatus.trim();
            updateReadStatus = updateReadStatus.replace(/,/g, "\n");
            newChild.textContent = updateReadStatus;

            console.log("/////////From AFTER Update Status Function/////////");
            console.log(book);
            console.log(bookNew);
            console.log(bookId);

            parent.replaceChild(newChild, oldChild);
        }
    }

    // let parent = document.getElementById('book-' + bookId); // Use the global bookId here
    // console.log(parent);
    // let updateReadStatus = book.info();
    // console.log("/////////From AFTER Update Status Function/////////");
    // console.log(book);
    // console.log(bookNew);
    // console.log(bookId);

    // Use the unique ID to select the correct book instance
    // let parent = document.getElementById(bookId);
    // let parent = document.getElementById('book-' + bookId); // Use the global bookId here
    // let parent = document.getElementsByClassName('new_div')[0];
    // console.log(parent);
    // let oldChild = document.getElementsByClassName('new_p')[0];
    // let newChild = document.createElement('p');
    // newChild.classList.add("new_p");

    // updateReadStatus = updateReadStatus.trim();
    // updateReadStatus = updateReadStatus.replace(/,/g, "\n");
    // newChild.textContent = updateReadStatus;
    // parent.replaceChild(newChild, oldChild);
}
