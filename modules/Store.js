export default class Store {
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
    const books = Store.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = Store.getBook();
    for (let i = 0; i < books.length; i += 1) {
      if (books.id !== id) {
        books.splice(id, 1);
      }
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
}