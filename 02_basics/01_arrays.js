//arrays declaration types 


const myarr=[1,32,4,5];

const myHeroes=["thor","hulk"];

const myArr2=new Array(1,2,4,5,5);
console.log(myarr);
console.log(myHeroes);
console.log(myArr2);


//+++++++++++++++++++++++arrays methods++++++++++


myarr.push(6);//adds value at end of array
console.log(myarr);

myarr.pop()//removes last element from array


myarr.unshift(0);//adds element to the starting of array 

console.log(myarr);

myarr.shift();//removes first element from array
console.log(myarr);

console.log(myarr.includes(9));//return true ot false

console.log(myarr.indexOf(4));//returns index of element you want

const newArr=myarr.join();

console.log(myarr);
console.log(newArr);//return type of string comma separated

//slice ,splice 


console.log("A",myarr);

const myn1=myarr.slice(1,3)
console.log(myn1);// [ 32, 4 ]
console.log("B",myarr);//  [ 1, 32, 4, 5 ] org array sam erehit h slice me 


const myn2=myarr.splice(1,3)
console.log(myn2);//op->[ 32, 4, 5 ]
console.log("B",myarr);//op of orginial array ->B [ 1 ] array hi split krdi 











 



