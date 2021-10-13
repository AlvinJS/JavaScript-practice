// iterate through numbers 0 to 15 and check if the current number is odd or even.
// if number is odd, return 1, if it is even, return 2.

const evenOrOdd = () => {
    for(let i=0;i<=15;i++){
        if(i%2 != 0){
            console.log(`${i} : 1`);
        } else {
            console.log(`${i} : 2`);
        }
    }
}

//print results
evenOrOdd();