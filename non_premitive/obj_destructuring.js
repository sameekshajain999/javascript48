const { jsx } = require("react/jsx-runtime")

const course ={ 
    coursename:"hindi",
    price:"999",
 courseinstructor:"sameeksha jain"
}
// access ka ek dusra tarika
const {courseinstructor:instructor}=course
console.log(instructor)
// API
/*{
    "name":"simo",
    "coursename":"hindi",
    "price":"free"

}*/
// sometimes APIS array ke format me bhi hoti hai , hamesha zaruri nhi object ke form me hi ho
[
    {},
    {},
    {}
]