
//Display all multiple of 3 numbers in the range 0 - 40
const multiplesOfThree= (num,multiple) => {
   
    for (let i=0;i<=num;i++){
        if((i%multiple)==0){
          console.log(`${i}`);
        }
        
    }
}

//print results
multiplesOfThree(40,3);
multiplesOfThree(40,5);