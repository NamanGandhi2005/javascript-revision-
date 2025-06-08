const name="naman"
const repoCount=50
console.log(name+repoCount+"value");//concatenation

//moder day syntax is backticks 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);



const gameName=new String("naman");//stores string in key value pairs

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);//inbuilt methods in strings 

console.log(gameName.toUpperCase());//this doesnt change original string beacuse copy is stored in stack memory of primitive data types 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString =gameName.substring(0,4);//last value is not included

console.log(newString);

const anotherString=gameName.slice(-4,4);//we can also put negative value to slice strings

console.log(anotherString);


const newStringOne="    namana   ";
