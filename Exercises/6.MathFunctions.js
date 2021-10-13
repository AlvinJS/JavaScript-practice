
//(i) function that passes in 2 numbers and prints the sum
function sum (num1,num2) {
    return num1 + num2;

}

//(ii) function for validating if a number is in the range of 0 - 15.
function range (num){
    if(num>=0 && num<=15){
        return true;
    } else {
        return false;
    }
}

//print results

console.log(`sum: ${sum(3,7)}`);
console.log(`in the range of  0 to 15? ${range(56)}`);

