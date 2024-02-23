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
        // console.log("////////////////// from bookInfo() ////////////");
        // console.log(myLibrary.length);
        // console.log("//////////////////");
        // console.log(myLibrary[i]);
        // console.log("//////////////////");
    }
}

bookInfo(myLibrary); // Initailly calls bookInfo function and adds existing books to the page

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
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

Book.prototype.info = function() { // Function to return book info
    return `${this.Title}, By: ${this.Author}, ${this.Pages} pages, ${this.Read ? 'I read it!' : 'Not read yet'}`;
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
    console.log("/////////From Submit Button/////////");
    console.log(read);

    // New Book object
    let book = new Book(title, author, pages, read); // new instance of Book object
    bookNew = book.info();  // calls info method to display book info as a string

    console.log("///////// book <-- Book /////////");
    console.log(book);
    console.log("///////// newBook <-- Book.prototype.info() /////////");
    console.log(bookNew);

    addToDisplay(book, bookNew)  // Calls function to display the book on the screen upon submit
    myLibrary.push(book); // Pushes book into myLibrary array
    bookInfo(myLibrary); // Initially calls bookInfo function and adds existing books to the page
}); 
// // *** function to add book info taken from user input and push into myLibrary array
// function addBookToLibrary() {
//     // *** User input to add book info ***
//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value;
//     let pages = document.getElementById("pages").value;
//     let read = document.getElementById("read").value;

//     const bookNew = new Book(title, author, pages, read);
 
function addToDisplay(book, bookNew) {  
    // *** creates a new paragraph element and appends it to the card_container div
    let element = document.getElementById("card_container");
    let newDiv = document.createElement("div");
    newDiv.classList.add("new_div");
    element.appendChild(newDiv);

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

    readStatus.addEventListener("click", function() {
        // function called to update status
        console.log("///////// after click -- BEFORE call Read / Not Read function called /////////");
        console.log(book);
        console.log(bookNew);
        updateStatus(book, bookNew);

    });

    // let checkbox = document.getElementById('read');
    // let read = checkbox.checked;
    // console.log(read);
    // checkbox.addEventListener('change', function() {
    //     read = checkbox.checked;
    //     console.log(read);
    // });

    // let readStatus = read;

    // // Add an event listener to the button
    
    // Formats string and displays in HTML via innerHTML
    bookNew = bookNew.trim();
    bookNew = bookNew.replace(/,/g, "\n");
    newP.innerHTML = bookNew;
    newDiv.appendChild(newP);
    newDiv.appendChild(newBtn);
    newDiv.appendChild(readStatus);
    dialog.close();
}

function updateStatus(book, bookNew) {
    console.log("///////// after click -- AFTER Read / Not Read function called /////////");
    // console.log(book.read);
    console.log(book);
    console.log(bookNew);
    book.Read = !book.Read;
    console.log("///////// after book.Read = !book.Read /////////");
    console.log(book);
    console.log("///////// set new variable updateReadStatus and read in info() to convert to a string /////////");
    let updateReadStatus = book.info();
    console.log("///////// console log updateReadStatus / and type /////////");
    console.log(updateReadStatus);
    console.log(typeof(updateReadStatus));

    // let updateP = document.getElementsByClassName("p");
    // newDiv.removeChild(newP);
    // newDiv.appendChild(updateP);
    console.log("//////////////////");
    let parent = document.getElementsByClassName('new_div')[0];
    console.log(parent);
    // let newP = document.createElement("p");
    // newP.classList.add("new_p");
    
    let oldChild = document.getElementsByClassName('new_p')[0];
    console.log(oldChild);

    let newChild = document.createElement('p');
    newChild.classList.add("new_p");

    updateReadStatus = updateReadStatus.trim();
    updateReadStatus = updateReadStatus.replace(/,/g, "\n");
    newChild.textContent = updateReadStatus;
    console.log(newChild);

    parent.replaceChild(newChild, oldChild);
    // parent.removeChild(oldChild);
    // parent.appendChild(newChild);

    // bookNew = book.info();
    // read = !read;
    // console.log(bookNew.info(read));

    // readStatus.addEventListener('click', function() {
    //     console.log("/////////From Update Status/////////");
    //     read = !read;
    //     console.log(read);
    // });

    //     checkbox.addEventListener('change', function() {
    //     read = checkbox.checked;
    //     console.log(read);
    // });
    // let readStatus = document.getElementById("card_container");

    // let checkbox = document.getElementById('read');
    // let read = checkbox.checked;
    // console.log(read);
    // checkbox.addEventListener('change', function() {
    //     read = checkbox.checked;
    //     console.log(read);
    // });

}
