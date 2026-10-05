const myarr=[2,33,4,5,6];
const a=["sam","eek","jain","always"];
const b=new Array(1,2,3,4);
console.log(b);
console.log(b[0]);
//methods
b.push(34);
console.log(b)
b.push(99);
console.log(b)
b.pop();
console.log(b);
b.unshift(9);
console.log(b);
b.shift();
console.log(b);
console.log(b.includes(9));
/*const newarr=b.join()
console.log(newarr);
console.log(b)

console.log("A",newarr);*/
//slice operation 
const my1=myarr.slice(1,3);
console.log("split operation",my1);
console.log("ORIGNAL",myarr);
//spalice operation
const my2=myarr.splice(1,3);
console.log("spalice operation is ",my2)
console.log("ORIGNAL",myarr);
