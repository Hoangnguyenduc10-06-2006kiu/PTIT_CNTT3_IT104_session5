class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.title},${this.author}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
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
