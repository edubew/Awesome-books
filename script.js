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
    const books = Store.getBooks();

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

}

// Store class: Handles local storage

// Event: Display books

// Event: Add books

// Event: Remove books