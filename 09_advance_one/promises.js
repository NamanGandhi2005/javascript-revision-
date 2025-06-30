const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("aync task is complete ");
        resolve()//.then se connect hoga isse jabhi promise consumed print hoga 

        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({//! data pass krdiya .then ko
            username:"chai",
            email:"namangandhierps@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);//! { username: 'chai', email: 'namangandhierps@gmail.com' }
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({
                username:"nbaman",
                password:"12423"
            })
        }
        else{
            reject("Error something went wrong")
        }
        
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);//{ username: 'nbaman', password: '12423' }
    return user.username//! iske liye phirse .then likhna pdega 
    
})
.then((username)=>{
    console.log(username)//! nbaman
})
.catch((error)=>{
    console.log(error);// ! when reject execute it shows error
    
})
.finally(()=>{
    console.log("the promise is either resolved or rejected");// ! promise resolve ho ya reject yeh hmesha execute hoga
    
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({
                username:"javascript",
                password:"2323"
            })
        }
        else{
            reject("ERROR js went wrong")
        }
    },1000)
})


//! ab hum promise ko handle krenge async await se 

async function consumePromiseFive() {
    try{
        const response=await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
    
}
consumePromiseFive()

async function getAllUsers() {
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(response);//! yeh print hora h par data print nhi hora kyuki wo parse hone me time leta h aur humne use time nhi diua 
        
        const data=await response.json()//! isko bhi await krna padega
        console.log(data);
    }catch(error){
        console.log(error);
        
    }
    
}
getAllUsers()

//isi function ko .then and .catch me likhenge

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
    
})