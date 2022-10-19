class Poly_Ex{

    EmpId:number;
    Ename:string;
    ESal:number;

    constructor(E_ID:number,E_name:string,E_Sal:number){
        this.EmpId=E_ID;
        this.Ename=E_name;
        this.ESal=E_Sal;
    }

    display=()=>{console.log(this.EmpId+""+this.Ename+""+this.ESal);}
}

class Poly_Ex2 extends Poly_Ex{

    subject:string;
    constructor(EmpId:number,Ename:string,Esal:number,sub:string){
        super(EmpId,Ename,Esal);
        this.subject=sub;
    }

    display=()=>{console.log(this.EmpId+""+this.Ename+""+this.ESal+""+this.subject);}

}

var Poly_Ex2Obj=new Poly_Ex2(413,"Abdul",455,"Chemistry");
