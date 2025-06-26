const userEmail="naman@gmail.com"

if(userEmail){
    console.log("have email");
    
}
else{
    console.log("dont have email");
    
}

//falsy values 
// * false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values

//* "0", "false","  ", [] , {} , function(){} , 

const emptyObj={};

if(Object.keys(emptyObj)){
    console.log("object is empty");
    
}

// Nullish Colaescing Operator (??):null undefined
let val1;

// val1=5??10
val1=null??10//agr value null ayi h toh 10 asign krdega


// val1=undefined??15;

val1=null??5??123
console.log(val1);


//terniary operator

// condition ?true:false

const iceTeaPrice=100
iceTeaPrice<=80 ?console.log("less than 80"): console.log("more than 80");// * short form for if and else also used in c++

