const myObject={
    js:"Javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject){
    console.log(key);// *prints only keys
    
    
}
for (const key in myObject){
    console.log(myObject[key]);// *prints only values of keys


    
}


//?will this for in method work for arrays
const programming=["cpp","js","ruby"]
for(const key in programming){
    console.log(key);// ! prints index of array bcoz keys in array is index by def
    
}
for(const key in programming){
    console.log(programming[key]);//prints values in array
    
}

// ! for in method dont work  for maps //only for of will work
