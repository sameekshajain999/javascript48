let mydate=new Date()
console.log(mydate)
console.log(mydate.toString());// convert into string
console.log(mydate.toLocaleString())
console.log(typeof(mydate))
let mycreatedate=new Date(2023,0,23);
console.log(mycreatedate.toDateString());
let firnew=new Date(2005,2,23,5,3);
console.log(firnew.toDateString());

let format= new Date("01-14-2023");
console.log(format.toDateString());
let mytimeknow=Date.now();
console.log(mytimeknow);
console.log(firnew.getTime());
// seconds me convert
console.log(Math.floor(Date.now()/1000));
//console.log(newDate.getday());
/*newDate.tolocaleString('default',{
    weekday:"long"
    
})*/