const tinderUser=new Object();

tinderUser.id="123abc";
tinderUser.name="naman"
tinderUser.isLoggedIn=false;




console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"naman",
            lastname:"gandhi",
        }
    }
}


console.log(regularUser.fullname.userfullname.firstname);//accessing nested objects using dot notation 


const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"a",
    4:"b",
}

// const obj3={obj1,obj2};//stored as object inside object { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);


const obj3=Object.assign({},obj1,obj2);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);





