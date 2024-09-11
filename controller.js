function generateRandomStuff() {
    thing = Object.keys(randomStuffWithCoolScore)[Math.floor(Math.random() * Object.keys(randomStuffWithCoolScore).length)];
    coolness = randomStuffWithCoolScore[thing];
    console.log(thing, coolness)
    CoolnessMTR = CoolnessMTR + coolness;
    return thing
}

function addRandomStuff(thing) {

}