updateView();
function updateView(){
  document.getElementById('app').innerHTML = /*HTML*/ `
    <p> <meter min="0" max="100" value="${CoolnessMTR}">${CoolnessMTR}%</meter> </p>
  `;
}
function WinAndLoss(){
    
}
