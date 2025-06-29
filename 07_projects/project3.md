# projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

```javascript
const clock=document.getElementById('clock')


setInterval(function(){//alternate to Cron job on frontend
  let date =new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000) 
```