const user={
    username:"naman",
    price:999,

    welcomeMessage:function () {
        console.log(`${this.username} ,welcome to website`);//this is used to refer to current context 
        console.log(this);
        
    }
}

// user.welcomeMessage()//it prints naman
// user["username"]="sam";
// user.welcomeMessage()//it prints sam 
//so context cahnged and this refer to updated context

console.log(this);//returns empty object here because it is node env 
//but in chrome it returns window object that is by deauflt object in chrome 


function chai() {
    console.log(this);
    
}

// chai()

//arrow functions now

// const chai=function(){
//     let username="naman";
//     console.log(this.username);
    
// }
// const chai=()=>{
//     let username="naman";
//     console.log(this.username);
    
// }



// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
const addTwo=(num1,num2)=> num1+num2 //explicti declaration no return keyword w/o curly braces 

console.log(addTwo(3,4));


