class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  getInfo(): string {
    return `${this.title},${this.author}`;
  }
}

class Library {
  private books: Book[] = [];
  addBook(book: Book): void {
    this.books.push(book);
  }

  listBooks(): void {
    console.log("Danh sach sach:");
    this.books.forEach((book, index) => {
      console.log(`${book.getInfo()}`);
    });
  }
}

const book1 = new Book("ABC", "123");
const book2 = new Book("XYZ", "456");
const myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.listBooks();
