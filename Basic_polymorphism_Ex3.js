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
var Books = /** @class */ (function () {
    function Books() {
    }
    Books.prototype.setBookDetails = function (B_Name, B_Price, B_Country) {
        this.Book_Title = B_Name;
        this.Book_Price = B_Price;
        if (B_Country != "") {
            this.Book_Country = B_Country;
        }
        else {
            this.Book_Country = "";
        }
    };
    Books.prototype.getBookDetails = function () {
        console.log("the book name is " + this.Book_Title + ", and the price is " + this.Book_Price);
    };
    return Books;
}());
var ScienceBooks = /** @class */ (function (_super) {
    __extends(ScienceBooks, _super);
    function ScienceBooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScienceBooks.prototype.getBookDetails = function () {
        if (this.Book_Country == "USA") {
            console.log("the book name is " + this.Book_Title + ", and the price is " + this.Book_Price + " Dollars");
        }
        else if (this.Book_Country == "INDIA") {
            console.log("the book name is " + this.Book_Title + ", and the price is " + this.Book_Price + " Rupees");
        }
        else {
            _super.prototype.getBookDetails.call(this);
        }
    };
    return ScienceBooks;
}(Books));
/*
var ScienceBooksObj=new ScienceBooks;
ScienceBooksObj.setBookDetails("Wings of Fire",1000,"USA");
ScienceBooksObj.getBookDetails(); */
/* var ScienceBooksObj=new ScienceBooks;
ScienceBooksObj.setBookDetails("Wings of Fire",1000,"INDIA");
ScienceBooksObj.getBookDetails(); */
var ScienceBooksObj = new ScienceBooks;
ScienceBooksObj.setBookDetails("Wings of Fire", 1000);
ScienceBooksObj.getBookDetails();
