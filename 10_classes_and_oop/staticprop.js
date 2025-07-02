class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username : ${this.username}`);
        
    }

    static createId(){//abhi child ko access krne dega par static lga denge toh access rok dega 
        return `123`
    }
}

const hitesh=new User("hitesh")
console.log(hitesh.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }



}

const iphone=new Teacher("iphone","i@phone.conm")
console.log(iphone.createId());
