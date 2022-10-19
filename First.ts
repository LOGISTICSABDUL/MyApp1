enum Result{Pass=1,Fail=-1,Promoted=0}
function Student(){

    let iSid:number=10;
    let sSname="Abdul Raheem";
    let bActive:boolean=true;

    let arrMarks:Array<number>=[45,65,76];

    let total=0;
    for(let i of arrMarks){
        total+=i;

    };

    let Avg=total/3.0;

    let arrContact:string[]=["324234","87967","5675"];

    let eResult:Result;
    this.eResult=function(){
        if(Avg>=35){
            return Result.Pass;
        }else{
            return Result.Fail;
        }
        
    }
    
}