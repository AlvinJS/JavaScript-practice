
/*calculates the amount of fuel it needs
provided that:
- A car needs 5 times the amount of fuel than the distance,
- it must always carry a minimum of 20 litres fuel before starting,
- Distance must be a number greater than zero
*/

let calculateFuel = (distance) => {
    if(distance <= 0){
        return "distance must be a number greater than zero";
    } 
    else if ((distance*5) <20) {
        return 20;
    }
    else{
        return distance * 5;
    }
}

console.log(`fuel needed = ${calculateFuel(15)}`);
console.log(`fuel needed = ${calculateFuel(1)}`);
console.log(`fuel needed = ${calculateFuel(-4)}`);