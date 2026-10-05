// create the function
function myname(){
    console.log("s");
    console.log("i");
    console.log("m");
    console.log("o");
    
}
//call the function
myname();
function add(Number1,Number2){
   /* console.log(Number1+Number2);*/
    //aise bhi likh sakte hai , variable ko decleared karke
    let result=Number1+Number2;
    return result;


}
/*add(3,4);*/
const result=add(77,8);
console.log("ans is:",result);
function loginuser(username){
    if(username==undefined){
        console.log("please enter the user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginuser("simoooo"));
// jab koi value pass nhi karte tb undefine ata hai
console.log(loginuser());
