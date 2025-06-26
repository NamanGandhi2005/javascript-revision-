// if 
const isUserLoggedIn=true
if(isUserLoggedIn){//agr true hogi jabhi execute hoga
    console.log("user has logged in succesffully");
    

}

const balance=1000;
// if(balance>100) console.log("test");//implicit decalration

// if(balance<500){
//     console.log("less than");
    
// }
// else if(balance<750){
//     console.log("less than 750");
    
// }
// else if(balance<900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1000");
    
// }


const UserLoggedIn=true;

const debitCard=true;

if(UserLoggedIn && debitCard){//both cond must be true to execute the scope
    console.log("allow to buy course");
    
}

if(UserLoggedIn || debitCard){//one cond can satisfy the condition
    console.log("allow to but ciourse");
    
}

