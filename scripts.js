
// console.log("hello");
////////////////////////
// Player Object Constructor 
// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(name);
//   }
// }
// const player1 = new Player('Chad', 'X');
// const player2 = new Player('Joe', 'O');
// player1.sayName();
// player2.sayName();

///////////////////////
// Book Object Constructor 
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//     this.info = function() {
//         console.log(title, author, pages, read);    
//     } 
// }
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 354, true);
// theHobbit.info();
///////////////////////
// Book Object Constructor -- returning the value of the function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
      this.info = function() {
           return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
      } 
  }
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 354, true);
  console.log(theHobbit.info());