updateView();
function updateView(){
  app.innerHTML = /*HTML*/ `
  <img id="car" src="img/car-outlined-vehicle-side-view.png">
  <label for="coolness">Kulhetsmeter: </label>
    <p> <meter min="0" max="100" value="${CoolnessMTR}">${CoolnessMTR}%</meter> </p>
    <button onclick="car()">Kjør</button>
  `;
}
function WinAndLoss(){

}

function isDriving(){
    while(car != stop){

    }
}
function isStopped(){

}
