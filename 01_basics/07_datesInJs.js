//Dates 

let myDate=new Date();

console.log(myDate.toString());//2025-06-09T13:52:26.172Z
console.log(myDate.toDateString());//2025-06-09T13:52:26.172Z
console.log(myDate.toLocaleString());//2025-06-09T13:52:26.172Z



let myCreatedDate=new Date(2023,0,23);//
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date("01-14-2024")

console.log(myCreatedDate2.toLocaleDateString());

let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();

console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleDateString('default',{
    weekday:"long",
    timeZone:"GMT"
    
}))//customize format of date output 

console.log(newDate);


