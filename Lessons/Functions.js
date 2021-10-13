 
 // Checks for negative number 

const isNegative= function (num) {
    
    if(num < 0){
       console.log("this number is a negative number\n");
    } else {
       console.log("this number is a positive number\n");
    }
   
   }
   
   const productNegative = (num1,num2) => {
      let product = num1 * num2;
      if(product < 0){
       console.log("this number is a negative number\n");
    } else {
       console.log("this number is a positive number\n");
    } 
   
   }
    isNegative(-2);
    productNegative(2);
   

   //is odd or even
   
   const isOdd = function (num){
    if(!(num % 2)){   
       console.log("this number is an odd number\n");
    } else {
       console.log("this number is not an odd number\n");
    }
    
   }
   
   const isEven = (num) => {
       if(num % 2){   
           console.log("this number is an even number\n");
        } else {
           console.log("this number is not an even number\n");
        }
   }
   
   isOdd(1);
   isEven(2);
   
   // Grade Calculator

   function calculateGrade(percentage){
    let grade = '';
     if (percentage >= 90 && percentage <=100) {
        grade = 'A+';
     }
     else if (percentage >= 80 && percentage < 90) {
        grade = 'A';
     }

     else if (percentage >= 70&& percentage <80) {
        grade = 'B';
     }

     else if (percentage >= 60 && percentage < 70) {
        grade = 'C';
     }

     else if (percentage >= 50 && percentage < 60) {
        grade = 'D';
     }
     else if (percentage <50) {
        grade = 'F';
     }
     else {
         grade = null;
     }
    return grade;
   } 
   
 const gradeInfo = (grade) => {
    if(grade == 'A+'){
        console.log("you have an excellent score\n");
    }
    else if(grade == 'A'){
        console.log("you have a great score\n");
    }

    else if(grade == 'B'){
        console.log("you have a good score\n");
    }

    else if(grade == 'C'){
        console.log("you have a decent score\n");
    }
    
    else if(grade == 'D'){
        console.log("Not bad, but there is still room for improvement\n");
    }

    else if(grade == 'F'){
        console.log("you have failed. I suggest you retake the test \n");
    }

    else {
        console.log("Wrong Input \n");  
    }
 }

 gradeInfo(calculateGrade(3));
 
 //calculate BMI function

 function  calculateBMI(weight,height){
    return weight/(height^2);
}

let infoBMI = (bmi) => {
    
    if (bmi < 18.5){
        console.log("You are Underweight\n");
    }

    else if (bmi>=18.5 && bmi <= 24.9){
        console.log("You have a normal weight\n");
    }

    else if (bmi>=25 && bmi <= 29.9){
        console.log("You are Overweight\n");
    }

    else if (bmi>=30){
        console.log("You are Obese\n");
    }

    else{
        console.log("your inputs are incorrect. Please make sure your input is correct (Weight in Kg and height in meters)\n");
    }

}

let bmi = calculateBMI(100,1.81);
console.log(`your BMI is ${bmi} which means that`);
infoBMI(bmi);



// multiplication table 

const multiTable1 = function (num){
    for(let i = 1 ; i<=5; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

const multiTable2 = (num) => {
    for(let i = 6 ; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
multiTable1(7);
multiTable2(7);

