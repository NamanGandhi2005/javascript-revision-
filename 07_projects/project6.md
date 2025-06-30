# projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

```javascript
const randomColor=function(){
  const hex="0123456789ABCDEF"
  let color="#"
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;

}
let changeToggle=null;
const startChangingColor=function(){
  changeToggle=setInterval(function(){
    document.body.style.backgroundColor=randomColor();
  },100)
  
}
const stopChangingColor=function(){
  clearInterval(changeToggle)
  changeToggle=null;//to clear the mem of that variable more cleaner way
}
// console.log(randomColor())//random color generate krega 
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)



 
```