enum Result{pass=1,drop=-1,Promoted1=0}
function test(){

    let studentId:number=123
    let studentName:string="MTT- Abdul Raheem"
    let bActive:boolean=true;

    let arrMarks:Array<number>=[45,35,67];
    let total:number=0;
    for(var i of arrMarks)
    total=total+i;

    let Avg=total/3;
    
    let arrContact:number[]=[123123123,123123,12312312];
    let arrBirth:[number,string,number]=[6,"Aug",1998];

    let eResult:Result;

    this.eResult=function(){
        if(Avg>35){
            return Result.pass;
        }
        else{
            return Result.drop;
        }

    }

}

var Ex=new test;
Ex.eResult();
console.log(Result[Ex.eResult]);