abstract class Absparent{

   add(x:number,y:number){
     console.log("addtion of two numbers"+(x+y));
   }

   sub(x:number,y:number){
    console.log("addtion of two numbers"+(x-y));
   }

   abstract mul(x:number,y:number);
   abstract div(x:number,y:number);
}

class ABS_Child extends Absparent{

    mul(x: number, y: number) {
        console.log("Multiple"+(x*y))
    }
    div(x: number, y: number) {
        console.log("div"+(x/y))
    }

}

var ABS_ChildObj=new ABS_ChildObj();

ABS_ChildObj.add(5,5);
ABS_ChildObj.mul(5,5);
ABS_ChildObj.sub(5,5);
ABS_ChildObj.div(5,5);

