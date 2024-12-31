console.log('Project 5');
let data=document.querySelector("#insert")
window.addEventListener('keydown',(e)=>{
  data.innerHTML=`
  <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>keyvalue</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  <div/>`
}) 