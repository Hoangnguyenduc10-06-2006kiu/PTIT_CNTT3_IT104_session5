class Book07 {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `${this.id}, ${this.title}, ${this.author}`;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library07 {
    constructor() {
        this.books = []; // đổi Book -> Book07
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        console.log("Danh sach sach:");
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
}
const book1 = new Book07(1, "ABC", "dvev");
const book2 = new Book07(2, "XYZ", "fbef");
const myLibrary = new Library07();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();
myLibrary.updateBookById(1, "sacevew", "thrtbr");
myLibrary.listBooks();
