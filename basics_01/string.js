const name="simo"
const repocount=50;
console.log(name+repocount+"value");// basic 
console.log('hii you shold write like time your name is ${ sameeksh} and my count is ${100}');
// access the value
console.log(name[0])
        console.log(name.length)
  console.log(name.toUpperCase());// UPPER CASE
  console.log(name.charAt(2));//KNOW THE WHICH CHARACTER
  console.log(name.indexOf('t'));//KNOW AT WHICH INDEX
  const newstr=name.substring(0,2)
  console.log(newstr)
  const another=name.slice(-2,0)
console.log(another)
let space="    shreya  "
console.log(space.trim())
const url="https://simo.com/ritik%20jasa";
console.log(url.replace('20%','-'));
console.log(url.includes('simo'))
console.log(name.split('-'))