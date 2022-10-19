function restaddition(...values:number[]){

    let sum=0;

    values.forEach(val=>sum=sum+val);

    return sum;
}

var sum=restaddition(23,45,56,67,7,6);

console.log(sum);


