
/*
checks whether a kid can watch a 15+ rated movie provided that:
 - They are 15 years or older.
 - If they are not, they should be supervised by an adult
*/

let acceptIntoCinema = (age, isSupervised) => {
    if (age >=15){
        return true;
    } else if (age < 15 && isSupervised === true){
        return true;
    }
    else {
        return false;
    }
}

console.log(`accepted to see the movie: ${acceptIntoCinema(12,true)}`);
console.log(`accepted to see the movie: ${acceptIntoCinema(13,false)}`);
console.log(`accepted to see the movie: ${acceptIntoCinema(16,false)}`);