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

const obj5={...obj1,...obj2};//spread method to join two or more objects

const users=[
    {
        id:1,
        email:"h@gamil.com",
        
    },
    {
        id:2,
        email:"h@gamil.com",

    },
    {
        id:3,
        email:"h@gamil.com",

    }
] 


console.log(users[1].email);

//methods in objects 

console.log(Object.keys(tinderUser));//output in array data type

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'naman' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"js i hindi",
    price:"999",
    courseInstructor:"hitesh",
}

//course.courseInstructor

const {courseInstructor}=course;
console.log(courseInstructor);//hitesh


const navbar=({company})=>{

}
navbar(company="hitesh");


//+++++++++++++++Api++++++++++++++++++++++++
//apis return data in json format 

// {
//     name:"naman",
//     coursename:"js in hindi",
//     price:"free"
// }









