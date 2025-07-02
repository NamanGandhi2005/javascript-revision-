class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
//! inheritance format for forcefully
class Teacher extends User{
    constructor(username,email,password){
        super(username)//directly access User username due to inheritance
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const chai=new Teacher("chai","chai@gmail.com","2323")
chai.addCourse()

const masalaChai=new User("masalaChai")

masalaChai.logMe()
console.log(chai===masalaChai);// ! false

