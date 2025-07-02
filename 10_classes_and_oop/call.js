function SetUsername(username){
    this.username=username

}

function createUser(username,email,password){
    SetUsername.call(this,username)//actually me call ho nhi ho rha h internally bas reference hua h
    //! call se reference store krke rakhta h taki variables delte na ho jaye aur this SetUserame ke this ko refer kre isiliyte lgaya h

    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@google.com","232323")
console.log(chai);//! createUser { email: 'chai@google.com', password: '232323' } //username toh a nhi rha 
