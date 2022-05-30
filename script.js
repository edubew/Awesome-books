// Book class: represents a book
class Book {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}

// Interface class: handles the add and remove books functionality on the UI
class Interface {
  static displayBooks() {
    const books = store.getBook();

    books.forEach((book) => Interface.addBookToList(book));
  }
  static addBookToList(book){
    const bookList = document.querySelector('.book-list');

    // create a table row element
    const row = document.createElement('tr');
    row.innerHTML =`
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td><a href="#" class="delete">Remove</a></td>
    `;
    bookList.appendChild(row);
  }

  // Delete book
  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }

  // Clear fields
  static clearFields(){
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }  
  }

// Store class: Handles local storage
class store {
  static getBook(){
    let books;
    if(localStorage.getItem('books')===null){
      books = [];
    } 
    else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static addBook(book){
    const books = store.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(title){
    const books = store.getBook();
    books.forEach((book, index)=>{
      if(book.title === title){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display books
 document.addEventListener('DOMContentLoaded', Interface.displayBooks); //call the displaybooks method everytime the page loads

// Event: Add books
document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault();

  // Get form values
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;

  const book = new Book(title, author); // Instatiate book
  
  Interface.addBookToList(book);  // Add book to interface

 Interface.clearFields();   // Clear input fields

 store.addBook(book); // Add book to the local storage

});

// Event: Remove books
document.querySelector('.book-list').addEventListener('click', (e)=>{
  Interface.deleteBook(e.target);

  // Remove book from storage
  store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});