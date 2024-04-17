class Book {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
  read() {
    return "Reading Book";
  }
}

class PaperBook extends Book {
  pages: number;
  format: string;

  constructor(title: string, pages: number, format: string) {
    super(title);
    this.pages = pages;
    this.format = format;
  }
  read() {
    return "Book in paper";
  }
}

class ElectronicBook extends Book {
  size: number;
  pages: number;

  constructor(title: string, size: number, pages: number) {
    super(title);
    this.size = size;
    this.pages = pages;
  }
  read() {
    return "Reading Book";
  }
}

class ParchmentBook extends Book {
  length: number;
  size: number;

  constructor(title: string, length: number, size: number) {
    super(title);
    this.size = size;
    this.length = length;
  }
  read() {
    return "Reading Book";
  }
}

class ReadBook {
  books:Book;
  constructor(books:Book) {
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
