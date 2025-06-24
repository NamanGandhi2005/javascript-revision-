function sayMyName(){
    console.log("hello");
    
}
sayMyName//it is only reference not calling 
sayMyName();//function calling

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// const result=addTwoNumbers(3,null);//null int value is 0 so op is 3 only 

// console.log(result);//op is undefined bcoz func does not have any return value



function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result;
}

const funcKaAns=addTwoNumbers(3,4);
// console.log(funcKaAns);

function loginUserMessage(username){
    if(!username){//same as username==undefined
        console.log("please enter username");
        return;
        
    }
    else{
        return `${username} logged in`;
    }
}
loginUserMessage();

console.log(loginUserMessage());//undefined just logged in





