class Books{

    Book_Title:string;
    Book_Price:number;
    Book_Country:string;

    setBookDetails(B_Name:string,B_Price:number,B_Country?:string){

        this.Book_Title=B_Name;
        this.Book_Price=B_Price;
        if(B_Country!=""){
            this.Book_Country=B_Country;
        }
        else
        {
            this.Book_Country="";
        }
        
    }

    getBookDetails(){
        console.log("the book name is "+this.Book_Title+", and the price is "+this.Book_Price )
    }

}

class ScienceBooks extends Books{

    getBookDetails(){
        if(this.Book_Country=="USA"){
            console.log("the book name is "+this.Book_Title+", and the price is "+this.Book_Price +" Dollars")
        }
        else if(this.Book_Country=="INDIA"){
            console.log("the book name is "+this.Book_Title+", and the price is "+this.Book_Price +" Rupees")
        }
        else{
            super.getBookDetails();
        }
    }
}
/* 
var ScienceBooksObj=new ScienceBooks;
ScienceBooksObj.setBookDetails("Wings of Fire",1000,"USA");
ScienceBooksObj.getBookDetails(); */


/* var ScienceBooksObj=new ScienceBooks;
ScienceBooksObj.setBookDetails("Wings of Fire",1000,"INDIA");
ScienceBooksObj.getBookDetails(); */


var ScienceBooksObj=new ScienceBooks;
ScienceBooksObj.setBookDetails("Wings of Fire",1000);
ScienceBooksObj.getBookDetails();
