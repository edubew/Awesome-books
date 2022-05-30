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

    books.forEach((book))

  }

}

// Store class: Handles local storage

// Event: Display books

// Event: Add books

// Event: Remove books