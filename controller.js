
function winLoss() {
    if (CoolnessMTR < 1) {
        document.getElementById("TheBod").innerHTML = '<div id="app" style=""></div>';
        document.getElementById('app').innerHTML = 'Way Past Un-Cool! :(';
        document.getElementById('app').style = 'Display: Flex; justify-content: center; font-size: 100px; color: red; '
        document.getElementById('TheBod').style = 'background: url(img/Sad.png);background-size: 1000px 1000px;background-repeat: no-repeat;';
        document.getElementById('app').innerHTML += `<button onclick="location.reload()">Reset</button>`;

    }

    if (CoolnessMTR > 99) {
        document.getElementById('TheBod').style = 'background: url(img/Smiley.png);background-repeat: no-repeat;'
        document.getElementById("TheBod").innerHTML = '<div id="app"></div>';
        document.getElementById('app').innerHTML = 'Totaly Swagtacular!!! :)';
        document.getElementById('app').style = 'Display: Flex; justify-content: center; font-size: 100px; color: green;'
        document.getElementById('app').innerHTML += `<button onclick="location.reload()">Reset</button>`;

    }
}
function randomOneOrZero(){
    rand = Math.floor(Math.random() * 2);
    return rand
}
function car() {
    let randomTime = Math.floor(Math.random() * 2000);
    
    if (isMoving) {
        
        //setInterval(moving(imageIndex), 100);
        setTimeout(generateRandomStuff, randomTime)
        // setTimeout(buddy, randomTime)
    }
}

function generateRandomStuff() {
    thing = Object.keys(randomStuffWithCoolScore)[Math.floor(Math.random() * Object.keys(randomStuffWithCoolScore).length)];
    coolness = randomStuffWithCoolScore[thing];
    app.innerHTML += /*HTML*/ `
        <div>${thing}</div>
        <button id="acceptButton" onclick="addRandomStuff()">Add to car</button>
        <button id="acceptButton" onclick="noAdd()">Not add to car</button>
    `;

}

function addRandomStuff(thing) {
    CoolnessMTR = CoolnessMTR + coolness;
    winLoss();
    isMoving = true;
    updateView();
    return CoolnessMTR;
}
function noAdd() {
    isMoving = true;
    winLoss();
    updateView();
}
function startCar() {
    isMoving = true;
    car();
}
function moving(imageIndex) {
    let element = document.getElementById('car-img');
    element.src = imagesMoving[imageIndex];
    imageIndex++;
    return imageIndex
}

