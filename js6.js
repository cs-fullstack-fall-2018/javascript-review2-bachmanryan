class Book {
    constructor(bookName, rating, yearReleased) {
        this.bookName = bookName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }

    printAllAttributes() {
        console.log(this.bookName + " Rating: " + this.rating + " " + "Release Date: " + this.yearReleased)
    }

}

function main() {
    var book1 = new Book("Yeller", 3.5, 2015);
    var book2 = new Book("Harry Potter", 5, 2006);
    console.log(book1.printAllAttributes());
    console.log(book2.printAllAttributes());

}

main();