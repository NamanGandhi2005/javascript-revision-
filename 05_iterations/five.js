const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function (val) {//callback h toh function ka naam nhi hota h
//     console.log(val);
    
// })

// coding.forEach((val)=>{//with the use of arrow functions
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe);

// coding.forEach((val,index,arr)=>{//op=     js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                        // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                        // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                        // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                        // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // console.log(val,index,arr);
    
// })

const myCoding=[
    {
        languageName:"javascript",
        languagefileName:"js"
    },
    {
        languageName:"CPP",
        languagefileName:"cpp"
    },
    {
        languageName:"python",
        languagefileName:"py"
    },
]

myCoding.forEach((item)=>{//{ languageName: 'javascript', languagefileName: 'js' }
    console.log(item);
    
})
myCoding.forEach((item)=>{
    console.log(item.languageName);     //javascript
                                        // CPP
                                        // python
    
})

