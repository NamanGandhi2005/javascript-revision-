let a=2323
if(true){
    let a=10//local scope
    const b=20
    var c=30
}
console.log(a);//prints value of outside the scope value only //global scope

// console.log(b);
console.log(c);//var prints outside the scope that is the problem

