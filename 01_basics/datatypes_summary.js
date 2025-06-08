//two categorization of datatypes 
//1.primitive:whiuch cannot be broken down into more datatypes


//7 categories :String,Number,Boolean,null,undefined, Symbol,BigInt

const score=100 
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;//undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id===anotherId);//return false due to symbol is unique value
const bigNumbner=424242424242424n;




//reference (Non Primitive)

//Array,Objects,Functions,

const heros=["shaktiman","naagraj"]//array

const obj1={
    name:"hathraj",
    age:22,
}//objects

const myDucntion=function(){//function ko bhi variable me store kr skte h
    console.log("hello world");
    
}
console.log(typeof(heros));
console.log(typeof(obj1));
console.log(typeof(myDucntion));

//non primitive data types are all type of Object IMP



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//types of memory handling in js

//stack(primitive) ,Heap(Non primitive)

let myYoutubename="namangandhi";
let anothername=myYoutubename;
myYoutubename="ajdada";

console.log(anothername);

let userOne={
    enmail:"namgandhipersonal@mgail.cxom",
    upi:"34344343"
}
let userTwo=userOne;//this is now reference not like primitive which creates copy in stack 
//if we made cahnges in user Two then it also reflects in userOne

