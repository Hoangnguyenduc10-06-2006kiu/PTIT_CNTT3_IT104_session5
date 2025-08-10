class Book {
  private id: number;
  private title: string;
  private author: string;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getInfo(): string {
    return `${this.id}, ${this.title}, ${this.author}`;
  }

  updateInfo(title: string, author: string): void {
    this.title = title;
    this.author = author;
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  listBooks(): void {
    console.log("Danh sach sach");
    this.books.forEach((book) => {
      console.log(book.getInfo());
    });
  }

  updateBookById(id: number, newTitle: string, newAuthor: string): void {
    const book = this.books.find((book) => book.getId() === id);
    if (book) {
      book.updateInfo(newTitle, newAuthor);
      console.log(`Da cap nhat sach`);
    } else {
      console.log(`Khong tim thay sach`);
    }
  }

  searchBookByTitle(findBook: string): void {
    const results = this.books.filter((book) =>
      book.getTitle().toLowerCase().includes(findBook.toLowerCase())
    );
    if (results.length > 0) {
      console.log(`Da tim thay sach"${findBook}":`);
      results.forEach((book) => console.log(book.getInfo()));
    } else {
      console.log(`Khong tim thay sach`);
    }
  }
}
const book1 = new Book(1, "ABC", "dvev");
const book2 = new Book(2, "XYZ", "fbef");

const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.listBooks();

myLibrary.updateBookById(2, "XYZ", "fbef");

myLibrary.searchBookByTitle("fbef");
