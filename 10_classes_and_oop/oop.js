
//! OBJECT LITERALS
const user={
    //Object Literal
    username:"naman",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log("get user details");
        console.log(this.username);//function ke andar ka context ko refer krne ke aliye this use krte h
        console.log(this);//current context ko print krdega jo bhi object ke andar h
        
        
    }
}

// console.log(user.getUserDetails());


//! CONSTRUCTOR FUNCTION

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    // return this;//! return kre ya nhi values return hoti h implicitly

    this.greeting=function(){
        console.log(this.username);
        
    }
}

const userOne=new User("naman",12,true);//! new keyword add krna jruri h kyuki vo naye obejct ki values overwrite krdega vrna 
const userTwo=new User("chai aur code",11,false)

console.log(userOne.constructor);
