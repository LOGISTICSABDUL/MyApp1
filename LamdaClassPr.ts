class PersonDetails{

    Name:string;
    Address:string;
    Age:number;

    constructor(Name:string,Addr:string,Age:number){
        this.Name=Name;
        this.Address=Addr;
        this.Age=Age;
    }

} 

let Pesonlist:Array<string|number>=['John', '12 Main Street, Newyork, NY', 15]
let Personlist1:(string|number)[]=[];

var v1=Pesonlist.forEach(element => {
    console.log(element);
});

