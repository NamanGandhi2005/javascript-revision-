//! this is olde method for gettter and setter as new method has class and get and set function inside the class
//! THIS IS FUNCTION BASED GETTER AND SETTER


function User(email,password){
    this._email=email;
    this._password=password
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },  
        set:function(value){    
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },  
        set:function(value){    
            this._password=value
        }
    })
}

const chai=new User("chai@gmadsa","2324")

console.log(chai.email);
