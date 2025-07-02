// let myName="naman     "


// console.log(myName.length);//!does not return trueLength of string 

// console.log(myName.trim().length);


let myheros=["thor","spiderman"]

let heroPower={
    thor:"hammer",

    spiderman:"sling",
    getSpiderPower:function (){
        console.log(`spidy Power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh=function(){
    console.log("hitesh is present in all objects");
    
}
Array.prototype.heyHitesh=function(){
    console.log("hitesh says hello");
    
}
heroPower.hitesh()//! hitesh is present in all objects sab ke pas yeh property chali gyi kyuki Object me define krdi thi

myheros.hitesh()//! hitesh is present in all objects
myheros.heyHitesh();

// heroPower.heyHitesh();//! error beacause humne hetHitesh vali power sirf arrays ko di h siliye object me kam nhi kregi




//* inheritance
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true

}
const TeachingSupport={
    isAvailable:false

}
const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport

}
Teacher.__proto__=User

//! modern sytax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="chaiaurcode            "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    
    console.log(`True Length is ${this.trim().length}`);
    
    

}

anotherUsername.trueLength();


