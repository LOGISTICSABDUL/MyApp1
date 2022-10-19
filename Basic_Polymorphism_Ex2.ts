class SampleThirteen{

    mathoperation(a:number,b:number){
        console.log(a+b);
    }

}

class SampleFourteen extends SampleThirteen{
 
    mathoperation(a:number,b:number){
        console.log(a*b);
    }

    
}

/* var SampleThirteenObj=new SampleThirteen;
SampleThirteenObj.mathoperation(5,6); */

var SampleFourteenObj=new SampleFourteen;
SampleFourteenObj.mathoperation(5,6);

