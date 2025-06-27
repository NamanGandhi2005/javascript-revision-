//reduce 

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc :${acc} and currval:${currval}`);
    
//     return acc+currval;
// },0)// ! acc :0 and currval:1 curr val decide yaha se krte h


const myTotal=myNums.reduce((acc,currval)=>{
    console.log(`acc :${acc} and currval:${currval}`);
    return acc+currval;
},0)
console.log(myTotal);

const shoppingCart=[
    {
        course:"javascript",
        price:1003,
    },
    {
        course:"pytrhon",
        price:1023,
    },
    {
        course:"cpp",
        price:1023,
    }
]

const TotalPrice=shoppingCart.reduce((acc,hello)=>{
    return acc+hello.price;
},0)

console.log(TotalPrice);

