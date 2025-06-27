const myNumbers=[1,2,3,4,5,6,7,8,9,10]


// const newNums=myNumbers.map((num)=>num+10)//[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

const newNums=myNumbers.map((num)=>num*10)
.map((num)=>num+1)//2nd map me first updated map ki valu hi pass hogi matlab 10 se multiplied vali
.filter((num)=>num>=50)
console.log(newNums);

