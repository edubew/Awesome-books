// Book class: represents a book
class Book {
  constructor(id, title, author) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// Interface class: handles the add and remove books functionality on the UI
class Interface {
  static displayBooks() {
    const books = store.getBook();

    books.forEach((book) => Interface.addBookToList(book));
  }

  static addBookToList(book) {
    const bookList = document.querySelector('.book-list');

    // create a table row element
    const row = document.createElement('tr');
    row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td><button type="submit" class="delete" data-id=${book.id}>Remove</button></td>
    `;
    bookList.appendChild(row);
  }

  // Delete book
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // Clear fields
  static clearFields() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}

// Store class: Handles local storage
class store {
  static getBook() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = store.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = store.getBook();
    for (let i = 0; i < books.length; i += 1) {
      if (books.id !== id) {
        books.splice(id, 1);
      }
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
}

// Event: Display books
document.addEventListener('DOMContentLoaded', Interface.displayBooks); // call the displaybooks method everytime the page loads

// Event: Add books
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const id = Math.floor((Math.random() * 10000));
  const book = new Book(id, title, author); // Instatiate book

  Interface.addBookToList(book); // Add book to interface

  Interface.clearFields(); // Clear input fields

  store.addBook(book); // Add book to the local storage
});

// Event: Remove books
document.querySelector('.book-list').addEventListener('click', (e) => {
  Interface.deleteBook(e.target);

  // Remove book from storage
  store.removeBook(e.target.parentElement.previousSibling.textContent);
});

// Single page application
const list = document.querySelector('#book-library');
const addNew = document.querySelector('#add-book');
const contact = document.querySelector('#contact');

const buttonMethods = [
  function bookLibrary() {
    list.classList.remove('hide');
    addNew.classList.add('hide');
    contact.classList.add('hide');
  },
  function addBook() {
    addNew.classList.remove('hide');
    list.classList.add('hide');
    contact.classList.add('hide');
  },
  function Contact() {
    contact.classList.remove('hide');
    list.classList.add('hide');
    addNew.classList.add('hide');
  },
];

// Use a for loop to iterate through the nav -items
const navItem = document.querySelectorAll('.nav-items');
for (let i = 0; i < navItem.length; i += 1) {
  navItem[i].addEventListener('click', () => {
    buttonMethods[i]();
  });
}

const showDate = document.querySelector('.show-date');
let date;
setInterval(() => {
  const today = new Date();
  date = `${today.getMonth() + 1}-${today.getFullYear()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  showDate.innerText = date;
}, 1000);
