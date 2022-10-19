class BookDetails{

    Book_Name:string;
    Boook_Price:number;

    setBooktitileandPrice(B_Name:string,B_Price:number){
        this.Book_Name=B_Name;
        this.Boook_Price=B_Price;
    }
    getbooktitileandprice(){
        console.log("Book_Name: "+this.Book_Name+" "+"Boook_Price: "+this.Boook_Price);
    }
}

class Book_publish1 extends BookDetails{

    publisher_name:string;
    setpublisherName(p_name:string){

        this.publisher_name=p_name;
    }
   getPublishername(){
    console.log("publisher_name: "+this.publisher_name)
   }
    
}

var Book_publishObj=new Book_publish1;

Book_publishObj.setBooktitileandPrice("Typescript",4456);
Book_publishObj.getbooktitileandprice();
Book_publishObj.setpublisherName("Durga");
Book_publishObj.getPublishername();

/* 
title ,price in one class
publisher in another class
all the functionlities should access through only one object
*/
