const score=400;

const balance =new Number(100)//object define that is number type

console.log(balance);
console.log(balance.toString());
console.log(typeof(balance.toString()));
console.log(balance.toString().length)

console.log(balance.toFixed(1));//100.0



const otherNumber=23533.8966;

console.log(otherNumber.toPrecision(3));//2.35e+4

const hundreds=10000000

console.log(hundreds.toLocaleString());//print us standarad values
console.log(hundreds.toLocaleString('en-IN'));//print indian standarad values

//+++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));//also in cpp same 
console.log(Math.round(4.6));//default round off 

console.log(Math.ceil(4.6));//always top round off returns 5
console.log(Math.floor(4.9));//always top round off returns 5

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());//genrates random value bbt

console.log(Math.floor(Math.random()*10+1));//genbrate randomwe value between 0 to 10


const min=10
const max=20

//i want random values between 10 and 20 

console.log((Math.random()*(max-min+1)+min));






