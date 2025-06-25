//immediately invoked function expression

// function chai() {
//     console.log("db connected");
    
// }

// chai()

//now 

// ()();//1st para for function declaration 2nd para for execution

( ()=>{//unamed iife
    console.log("DB connected");
    
})();

((name)=>{//named iife
    console.log(name);
    
})("naman")

