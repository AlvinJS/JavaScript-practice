//Calculate your age.

const calculateAge = (dob) => {
   dob = new Date(dob); // date of birth
   let diff = Date.now() - dob.getTime();  // date.now (milliseconds from 1970 to today) getTime() -> milliseconds from 1/1/1970 to specified date
   let diffDate = new Date(diff);  // gets diff date
   let year = diffDate.getUTCFullYear(); //get year of date 
   age = year - 1970; 
   return age; 
}

const calcAge = (birthYear) =>{

}

//print results

console.log(`You are currently ${calculateAge("5/4/2000")} years old`);


