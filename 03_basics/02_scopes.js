let a=2323
if(true){
    let a=10//local scope
    const b=20
    var c=30
}
console.log(a);//prints value of outside the scope value only //global scope

// console.log(b);
console.log(c);//var prints outside the scope that is the problem


function one() {
    const username="naman";

    function two() {
        const websites="youtube";
        console.log(username);
        
    }
    // console.log(websites);
    two()
}

// one()

//isko ek ice cream ki trah mjhenge matlab chote bache bado se asani se ice cream chin skte h par bade nhi kr skte 
//vese hi nested functions apne upar value function ke var ko access kr skte h par global vale apne nestd function ke var access nhi kr skte 


if (true){
    const username="naman";
    if(username==="naman"){
        const websites="youtube"
        console.log(username+websites);
        
    }
    // console.log(website);//1 st error due to scope 
    
}

// console.log(username);//2nd error due to scope 


//+++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++++

function addone(num) {
    return num+1;
}

addone(5);

const addTwo=function(num){//this is called expression beacuse var holds value of fucntion
    return num+2;
}

addTwo(5);