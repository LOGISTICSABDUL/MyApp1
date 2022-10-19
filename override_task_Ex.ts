class About_Book{

  Book_Name:string;
  Book_Price:number;
  Country:string;
  constructor(B_Name:string,B_Price:number,Country?:string){
      this.Book_Name=B_Name;
      this.Book_Price=B_Price;
      this.Country=Country??"";
  }
  
}

class Book_Publisher extends About_Book{

  Book_publisher_Name:string;
  constructor(B_Name:string,B_Price:number,Book_publisher_Name:string,Country?:string) {
      super(B_Name, B_Price, Country);
      this.Book_publisher_Name=Book_publisher_Name;
  }
    display() {
      
      if(this.Country=="USA"){
          
        console.log("B_Name:"+this.Book_Name+" "+"B_Price:"+this.Book_Price,"Book_publisher_Name:"+this.Book_publisher_Name+" "+"Country_Dollar:"+this.Country+"$")}
        else{
          console.log("B_Name:"+"\t"+this.Book_Name,"B_Price"+"\t"+this.Book_Price,"Book_publisher_Name"+"\t"+this.Book_publisher_Name+"Country_Dollar:"+"\t"+this.Country+"₹");
        }
    }
  }

  var Book_PublisherObj=new Book_Publisher("ALL IS WELL-COOL",456,"ABDUL-PUBLISH","USA");
  Book_PublisherObj.display();