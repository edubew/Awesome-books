import Store from './Store.js';

export default class Interface {
  static displayBooks() {
    const books = Store.getBook();

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
