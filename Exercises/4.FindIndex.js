
//Takes an array and a string as arguments and return the index of the string.

const findIndex = (array,word) => array.indexOf(word) 

//print results

console.log(`${findIndex(["hi", "zatec", "Rwanda", "training"], "Rwanda")}`);
console.log(`${findIndex(["iPhone", "iPad", "iMac", "MacBook Air"], "iPad")}`);
console.log(`${findIndex(["html", "css", "javascript", "tailwindcss"], "tailwindcss")}`);
console.log(`${findIndex(["toyota", "mercedes benz", "volkswagen", "maclaren"], "toyota")}`);
let listOfFruits = ["apple","pineapple","orange"];
console.log(`${findIndex(listOfFruits,"banana")}`);