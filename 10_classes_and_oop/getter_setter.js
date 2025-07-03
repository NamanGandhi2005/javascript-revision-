class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}naman`;
    }
    set password(value){
        this._password=value.toUpperCase()//! ab idhar error aya tha jab this.pasword use kr rhe the par this._password krne se resolve ho jata h
    }
}
const hitesh=new User("namana@gmail.com","23442")
console.log(hitesh.email);

