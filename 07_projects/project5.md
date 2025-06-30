# projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

```javascript
const insert=document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
    <div> class="color">
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>
  `
})
 
```