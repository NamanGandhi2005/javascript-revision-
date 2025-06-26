//for of method for iterating arrays

const nums=[1,2,3,4,5]

for(const num of nums){
    console.log(num);
    
}

const string="hello naman"

for(const str of string){
    console.log(str);
    
}


// ! maps 

const maps=new Map();

maps.set('IN',"INDIA")
maps.set('USA',"United States of America")
maps.set('Fr',"France")

// console.log(map);//error 

for(const [key,value] of maps){
    console.log(key," -> ",value);
    
}

const myObject={
    'game1':"NFS",
    'game2':"Spiderman"
}

// ! for(const [key,value] of myObject){ this is not iterable method for objects

//     console.log(key,value);
    //
// }


