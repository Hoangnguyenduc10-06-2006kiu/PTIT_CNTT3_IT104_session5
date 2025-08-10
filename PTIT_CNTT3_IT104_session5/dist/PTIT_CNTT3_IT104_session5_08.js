class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getInfo() {
        return `${this.id}, ${this.title}, ${this.author}`;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
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
        console.log("Danh sach sach");
        this.books.forEach((book) => {
            console.log(book.getInfo());
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find((book) => book.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Da cap nhat sach`);
        }
        else {
            console.log(`Khong tim thay sach`);
        }
    }
    searchBookByTitle(findBook) {
        const results = this.books.filter((book) => book.getTitle().toLowerCase().includes(findBook.toLowerCase()));
        if (results.length > 0) {
            console.log(`Da tim thay sach"${findBook}":`);
            results.forEach((book) => console.log(book.getInfo()));
        }
        else {
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
