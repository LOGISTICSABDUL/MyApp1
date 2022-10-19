let arrMarks:Array<number>=[34,56,78];
let arrContacts:string[]=["Abdul","Raheem","Hyderabad"];

for (let iterator of arrContacts) {
    console.log(iterator);
}
let total=0;
for (let iterator of arrMarks) {
    total=total+iterator;
}

let Avg=total/3;

if(Avg>35){
    let Result="Pass"
    console.log(Result);
}
else{
    let Result="Fail";
    console.log(Result);
}
