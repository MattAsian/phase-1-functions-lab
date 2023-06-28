// Code your solution in this file!
let hq = 42;
const feetPerBlock = 264;

function distanceFromHqInBlocks(blocks) {
    return Math.abs(hq - blocks);
}
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * feetPerBlock;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * feetPerBlock);
}
function calculatesFarePrice(start, destination) {
    let fare = 0;
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        fare = 0;
    } 
    else if (400 < distance && distance < 2000) {
        fare = (distance - 400) * .02;
    }
    else if (2000 < distance && distance < 2500) {
        fare = 25;
    } else {return 'cannot travel that far'};
    return fare;
}

