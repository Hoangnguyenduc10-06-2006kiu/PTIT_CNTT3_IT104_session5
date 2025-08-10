class Book07 {
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

  getInfo(): string {
    return `${this.id}, ${this.title}, ${this.author}`;
  }

  updateInfo(title: string, author: string): void {
    this.title = title;
    this.author = author;
  }
}

class Library07 {
  private books: Book07[] = []; // đổi Book -> Book07

  addBook(book: Book07): void {
    this.books.push(book);
  }

  listBooks(): void {
    console.log("Danh sach sach:");
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
}


const book1 = new Book07(1, "ABC", "dvev");
const book2 = new Book07(2, "XYZ", "fbef");

const myLibrary = new Library07();
myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.listBooks();

myLibrary.updateBookById(1, "sacevew", "thrtbr");

myLibrary.listBooks();
