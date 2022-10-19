var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BookDetails = /** @class */ (function () {
    function BookDetails(Book_Name, Book_Price) {
        this.Book_Name = Book_Name;
        this.Boook_Price = Book_Price;
    }
    BookDetails.prototype.display = function () {
        console.log("Book_Name: " + this.Book_Name + " " + "Boook_Price: " + this.Boook_Price);
    };
    return BookDetails;
}());
var Book_publish = /** @class */ (function (_super) {
    __extends(Book_publish, _super);
    function Book_publish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Book_publish.prototype.WritepublisherName = function (publisher_name) {
        this.publisher_name = publisher_name;
    };
    Book_publish.prototype.display1 = function () {
        console.log("publisher_name: " + this.publisher_name);
    };
    return Book_publish;
}(BookDetails));
var Book_publishObj = new Book_publish1("Typescript", 4456);
Book_publishObj.display();
Book_publishObj.WritepublisherName("Durga");
Book_publishObj.display1();
/*
title ,price in one class
publisher in another class
all the functionlities should access through only one object
*/
