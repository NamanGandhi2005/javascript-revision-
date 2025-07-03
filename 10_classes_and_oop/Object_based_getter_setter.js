const User={
    _email:"madadasd",
    _password:"2445",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password=value
    }
}

const chai=Object.create(User)
chai.email="dasdad"
console.log(chai.email);
