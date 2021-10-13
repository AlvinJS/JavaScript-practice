

//boolean
const wokeUp = true;
var isLate = false;
var happy = true;
var tired = false;
var hungry = true;
var boolean = true;
var sunny = false;
var cloudy = true;
var dark = false;
var valid = true;
var pending = true;
var failed = false;
var running = true;
var pushed = false;
var commited = true;


//number
var age = 2;
var grade = 80;
var weight = 100;
var height = 180;

//string 
var name = "Alvin";
var country = "Rwanda";
var city ="Kigali";
var district = "Nyarugenge";
var sector = " Nyarugenge";
var petname ="Tambwe";
var concatinate = "first part" + "second part" + "third part"

//array
var friends = ["Bob","John","Paul","Peter"];
var carbrands=["Toyota","Mercedes","BMW","Volkswagen","Hyundai"];
const months = [1,"Jan",2,"Feb",3,"Mar"];
//objects

const student ={

    name: "John",
    age: 14,
    grade: 10.7,
    goodStudent: true,

}

const car = {

    brand: "Mazda",
    model: "R8",
    color: "Noir",
    doors: 2,
    Manufacturer: "Mazda Industries",
    price: 35000,

}





const product = {
    
    category: "cleaning",
    name: "soap",
    unitPrice: 400,

}


console.log(car.price);
console.log(friends);
friends.push("Alvin");
console.log(friends);
console.log(friends[5]);
friends.pop();
friends.shift();
console.log(friends);

console.log(` I just bought a new car. Its brand is: ${car.brand}`);
