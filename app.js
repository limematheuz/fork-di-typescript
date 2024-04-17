"use strict";
class Book {
    constructor(title) {
        this.title = title;
    }
    read() {
        return "Reading Book";
    }
}
class PaperBook extends Book {
    constructor(title, pages, format) {
        super(title);
        this.pages = pages;
        this.format = format;
    }
    read() {
        return "Book in paper";
    }
}
class ElectronicBook extends Book {
    constructor(title, size, pages) {
        super(title);
        this.size = size;
        this.pages = pages;
    }
    read() {
        return "Reading Book";
    }
}
class ParchmentBook extends Book {
    constructor(title, length, size) {
        super(title);
        this.size = size;
        this.length = length;
    }
    read() {
        return "Reading Book";
    }
}
class ReadBook {
    constructor(books) {
        this.books = books;
    }
    read() {
        return this.books.read();
    }
}
const phisicalBook = new PaperBook("Dragones de papel", 350);
const digitalBook = new ElectronicBook("One piece", 150);
const readerPaper = new ReadBook(phisicalBook);
const readerDigital = new ReadBook(digitalBook);
console.log(readerDigital.read());
console.log(readerPaper.read());
