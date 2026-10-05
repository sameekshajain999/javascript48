//singalton obj
/*const tinder=new Object()*/
//constructor object
const user={}
    user.id="123abc"
    user.name="samm"
    user.islogin=false
    console.log(user);
const regularuser={
    email:"som444",
    name:{
        fullname:{
            nickname:{
                noname:{
                    firstname:"sameeksha",
                    lastname:"jain"
                }
            }
        }
    }

}
// access
console.log(regularuser.name);
console.log(regularuser.name.fullname.nickname.noname.firstname);
//object ko alag alag print karata hai
const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}
/*const obj3=Object.assign({},obj1,obj2);*/
//ya ye wala bhi use kar sakte hai
const obj3={...obj1,...obj2}
console.log(obj3)
//ye sab array ke form me hi hote hai kahi na kahi
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


