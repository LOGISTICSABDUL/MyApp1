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
var About_Book = /** @class */ (function () {
    function About_Book(B_Name, B_Price, Country) {
        this.Book_Name = B_Name;
        this.Book_Price = B_Price;
        this.Country = Country !== null && Country !== void 0 ? Country : "";
    }
    return About_Book;
}());
var Book_Publisher = /** @class */ (function (_super) {
    __extends(Book_Publisher, _super);
    function Book_Publisher(B_Name, B_Price, Book_publisher_Name, Country) {
        var _this = _super.call(this, B_Name, B_Price, Country) || this;
        _this.Book_publisher_Name = Book_publisher_Name;
        return _this;
    }
    Book_Publisher.prototype.display = function () {
        if (this.Country == "USA") {
            console.log("B_Name:" + this.Book_Name + " " + "B_Price:" + this.Book_Price, "Book_publisher_Name:" + this.Book_publisher_Name + "" + "Country_Dollar:" + this.Country + "$");
        }
        else {
            console.log("B_Name:" + "\t" + this.Book_Name, "B_Price" + "\t" + this.Book_Price, "Book_publisher_Name" + "\t" + this.Book_publisher_Name + "Country_Dollar:" + "\t" + this.Country + "₹");
        }
    };
    return Book_Publisher;
}(About_Book));
var Book_PublisherObj = new Book_Publisher("ALL IS WELL-COOL", 456, "ABDUL-PUBLISH", "USA");
Book_PublisherObj.display();
