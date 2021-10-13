//determine whether a bartender should serve drinks to adults and when he’s not on a break session.

const serveDrinks = (age,isOnBreak) => {

    if(isOnBreak === true){
        return false;
    } else if (age < 18 ){
        return false;
    } else {
        return true;
    }

}
//print out results 

console.log(`serve drinks? ${serveDrinks(17,true)}`);
console.log(`serve drinks? ${serveDrinks(19,false)}`);
console.log(`serve drinks? ${serveDrinks(30,true)}`);
console.log(`serve drinks? ${serveDrinks(16,false)}`);

