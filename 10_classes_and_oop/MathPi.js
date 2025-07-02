// console.log(Math.PI);
// Math.PI=23
// console.log(Math.PI);

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const chai={
    name:"gingerChai",
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("chai nhi bani");
        
    }
}

console.log(chai);

const chaiDescripter=Object.getOwnPropertyDescriptor(chai,"name");
console.log(chaiDescripter);
/*
{
  value: 'gingerChai',
  writable: true,
  enumerable: true,
  configurable: true
}*/

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    console.log(key,value);
    
}