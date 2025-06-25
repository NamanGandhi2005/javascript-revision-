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





function calculateCartPrice(...num1){//dot operator for multiple values pass in funtion
    return num1;
}
function calculateCartPrice2(value1,value2,...num1){//dot operator for multiple values pass in funtion
    console.log(value1);
    console.log(value2);
    
    return num1;
}

console.log(calculateCartPrice2(200,300,400,343,56456));
//sysntax for passing object in fucntion
const user={
    username:"hitesh",
    price:200,

}

function handleObject(anyobject){//this is syntax to accept fucntion or username
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

//pass arrays in fucntuon
const myNewArray=[200,300,4000];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

