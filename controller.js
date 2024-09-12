
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
    console.log(thing, coolness)
    CoolnessMTR = CoolnessMTR + coolness;
    app.innerHTML += `${CoolnessMTR}`
    isMoving = true;
    updateView();
    return CoolnessMTR;
}
function noAdd() {
    isMoving = true;
    updateView();
}
function startCar() {
    isMoving = true;
    console.log(isMoving);
    car();
}
function moving() {
    for (i = 0; i < imagesMoving.length; i++) {
        element = document.getElementById('car-img');
        element.src = imagesMoving[i]
    }
}
function car() {
    let randomTime = 2000;
    if (isMoving) {
        moving();
        setTimeout(generateRandomStuff, randomTime)
        // setTimeout(buddy, randomTime)
    }
}

function winLoss() {
    if (CoolnessMTR < 1) {
        app.innerHTML = 'Way Past Un-Cool! :(';
        app.style = 'Display: Flex; justify-content: center; font-size: 100px; color: red; '
        document.getElementById('body').classList.add('LossImg');
    }

    if (CoolnessMTR > 99) {
        app.innerHTML = 'Totaly Swagtacular!!! :)';
        app.style = 'Display: Flex; justify-content: center; font-size: 100px; color: green;'
        document.getElementById('body').classList.add('WinImg');

    }
}
