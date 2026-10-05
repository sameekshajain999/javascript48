const hero=["cement","iron","spider"];
const dc=["superman","ironman","flash"]
hero.push(dc)
//console.log(hero)
/*const all=hero.concat(dc);
console.log(all);*/
const new1=[...hero, ...dc];//it gives one one element
console.log(new1);
const reals=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(reals);

const updates=reals.flat(Infinity);
console.log("using flat operation:",updates);
console.log(Array.isArray("samm"));//ye hai ya nhi
console.log(Array.from("sameeksha"))//create the array
let s1=100
let s2=200
let s3=600
console.log(Array.of(s1,s2,s3));
