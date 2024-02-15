
// console.log("hello");

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(name);
  }
}

const player1 = new Player('Chad', 'X');
const player2 = new Player('Joe', 'O');
// console.log(player.name, player.marker);
player1.sayName();
player2.sayName();


// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   theHobbit.info = function() {
    // console.log(theHobbit.info());
    // console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`);
//   }
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 354, true);

// theHobbit.info();
// console.log(theHobbit.info());