// object literals
/*Object.create*/// ye constructor ke throw object create hota hai
const sym=Symbol("key1");
//create object
const user={
    name:"REEM",
    age:18,
    [sym]:"mykeys",
    location:"bhopal",
    email:"jainsam55",
    islogin:false,
    lastday:["monday","saturday"]


}
// access object 
console.log(user.email);
console.log(user["email"]);
console.log(user[sym]);
//updaTE
user.email="simo999";
console.log(user["email"]);
//freez :jisse koi change or access nhi kar paye
/*Object.freeze(user);
user.email="rinki";
console.log(user["email"]);*/
// function
user.greet=function(){
    console.log("hello js user");
}
user.neww=function(){
    console.log(`heelo user,${this.age}`);
}
console.log(user.greet());
console.log(user.neww());