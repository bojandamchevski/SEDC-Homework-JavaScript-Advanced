function Library(name, books, address) {
    this.name = name;
    this.books = books;
    this.address = address;
    this.numberOfMembers = function () {
        if (this.books.length === 0) {
            console.log("There are no Books in the library !");
            return;
        }
        if (this.books.length > 0) {
            return this.books.length * 15;
        }
    };
    this.printBook = function () {
        if (this.books.length === 0) {
            console.log("There are no Books in the library !");
            return;
        }
        if (this.books.length > 0) {
            // return this.books.forEach(book => console.log(book)); // moze i vaka
            let books = this.books.filter(b=>b.title).map(b=>b.title);
            console.log(books);
        }
    };
    this.addBook = function(book){
        this.books.push(Object.create(book));
    }
}


function Book(title, genre, authors) {
    this.title = title;
    this.genre = genre;
    this.libraries = [];
    this.authors = authors;
    this.addLibrary = function (library) {
        this.libraries.push(library); //TASK 2
        library.books.push(this); //TASK 2
    };
    this.removeLibrary = function (library) {
        this.libraries.pop(library); //TASK 2 
        library.books.pop(this); //TASK 2
    };
}


function Author(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = function (book) {
        if (!book) {
            console.log("Please add a book to your collection"); //TASK 2
            return;
        }
        if (book) { //TASK 2
            this.currentBook = book; //TASK 2
            this.books.push(this.currentBook); //TASK 2
        }
    };
}


function enterMyInformation(authorFirstName, authorLastName, authorYearOfBirth, bookName, bookGenre, libraryName, libraryAddress) {
    let author = new Author(authorFirstName, authorLastName, authorYearOfBirth);
    let book = new Book(bookName, bookGenre,[author]);
    let library = new Library(libraryName, [], libraryAddress);
    // library.addBook(book); // TASK 3
    // console.log(library); // TASK 3
    book.addLibrary(library);
    author.startBook(book);
    console.log(`The number of members is: ${library.numberOfMembers()}`);
    library.printBook();
    console.log(library);
    console.log(book);
    console.log(author);
}

enterMyInformation("LEO", "TOLSTOY", 1828, "ANA KARENINA", "ROMANCE", "PUBLIC LIBRARY", "WALL STREET NEW YORK");
