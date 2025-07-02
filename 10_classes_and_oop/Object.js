function multiplyBy5(num){
    this.num=num//! {} iss reference me store hota h yeh krne se 
    return num*5;

}

multiplyBy5.power=2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score

}

createUser.prototype.increment=function(){
    this.score++;//! this matlab jisne bhi bulaya h uska score increment krdo
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);//! this matlab jis ne bhi bulaya uska score print karo

    
}
const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printMe()
chai.increment()
chai.printMe()