//singleton
// Object.create

// object literals

const mySym=Symbol("key1");


const JsUser={
    name:"Naman",
    [mySym]:"myKey1",//agar isko symbol return karna h toh square bracket ke andar rakh do
    "full name":"Naman gandhi",

    age:18,
    location:"Jaipur",
    email:"namangandhiperosnal@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
}

console.log(JsUser.email);//1st way to acces keys 

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);//undefined
console.log(JsUser[mySym]);

JsUser.email="namnagandhi@gamil.com";
// Object.freeze(JsUser);//freeze the value of key inside ibejct 

JsUser.email="namnagandhefei@gamil.com";
console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js user");
    
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js user,${this.name}`);
    
}

console.log(JsUser.greeting());//Hello Js user
console.log(JsUser.greetingTwo());//Hello Js user,Naman




