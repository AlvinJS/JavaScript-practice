//Calculates the number of points a football team had obtained so far.
/*
win = 3 points
draw  = 1 point
loss = 0 points
*/

let footballPoints = (wins,draws,losses) => (wins*3) + (draws*1) + (losses*0)

console.log(`Total points = ${footballPoints(3,4,2)}`);