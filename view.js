updateView();

function updateView() {
  app.innerHTML = /*HTML*/ `
  <label for="coolness">Kulhetsmeter: </label>
    <p> <meter min="0" max="100" value="${CoolnessMTR}">${CoolnessMTR}%</meter> </p>
    <img id="car-img" src="img/car_stop.png"/>
    <button onclick="startCar()">Kjør</button>
  `;
  winLoss();
}




