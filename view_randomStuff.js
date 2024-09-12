updateView();
function updateView(){
  app.innerHTML = /*HTML*/ `
  
  <label for="coolness">Kulhetsmeter: </label>
    <p> <meter min="0" max="100" value="${CoolnessMTR}">${CoolnessMTR}%</meter> </p>
    <button onclick="car()">Kjør</button>
  `;
}