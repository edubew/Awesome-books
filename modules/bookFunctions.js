import Store from "./Store.js";
import Interface from "./Interface.js";
import Book from "./Book.js";
export const addBook =(e) => {
  e.preventDefault();

  // Get form values
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const id = Math.floor((Math.random() * 10000));
  const book = new Book(id, title, author); // Instatiate book

  Interface.addBookToList(book); // Add book to interface
  Interface.clearFields(); // Clear input fields
  Store.addBook(book); // Add book to the local storage
}

export const removeBook =(e)=>{
   Interface.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousSibling.textContent);
}