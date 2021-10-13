// Create 10 arrays or more of different elements and format (e.g array in array)
const friends = ["Bob","John","Paul","Peter"];
const carbrands=["Toyota","Mercedes","BMW","Volkswagen","Hyundai"];
const months = [1,"Jan",2,"Feb",3,"Mar"];
const players = ["Ronaldo","Lebron","Brady","OBJ","KD","Woods","Federer"];
const sports = ["Football","Basketball","Volleyball","Baseball","Handball","Cricket","Golf","Tennis"];
const hobbies = ["reading","mountain climbing","surfing","cooking","gardening","creative writing","dancing"];
const musicGenres = ["Jazz","Hip hop","Pop","RnB","House music"];
const actors =["Tom Hanks","Will Smith","Denzel Washington","Samuel L. Jackson","Tom Cruise"];
const companies= ["mtn","Pfizer","TeamViewer",["Netflix","Amazon Prime Videos","Disney+","Apple+","Paramount+"],["Toyota","Mercedes","BMW","Volkswagen","Hyundai"],["Amazon","Microsoft"],["Apple","Samsung","Google","Xiaomi"]];
const randomThings = ["vase","pool",12000,'A',"Titles",["Jordan",6,"Kobe",4,"Nadal",20],"cockroach,lizard,plane,truck,sing,dance,reports,advice,etc..."];

// Use the different methods we talked about today such length, push, unshift, pop, shift, splice, slice ,indexOf,concat, includes,loop
const numberOfPlayers = players.length;
hobbies.push("golfing","fishing","painting");
actors.unshift("Chris Evans","Ryan Reynolds");
players.pop();
companies.splice(0,3,"Airtel","Johnson & Johnson",["Michelin","Pirelli"]);

if (players.indexOf("Osaka") == -1 ) {
    players.push("Osaka");
  } else {
    console.log("Player already exists");
  }
const companyGroups = companies.slice(-3);

 

//Create some comprehensive console.log displaying the results where applicable.
console.log(`Number of players in the players' list: ${numberOfPlayers}`);
console.log(`players: ${players}`);
console.log(`actors: ${actors}`);
for (let i = 0; i < hobbies.length; i++) {
    console.log(`Hobbie number ${i+1} is ${hobbies[i]}`);
  }

console.log(actors.includes("Johny Depp"));
console.log(`last 3 company groups: ${companyGroups}`);


//--------------------------------------------------------------------------

//Array destructuring

const soccerPlayerArray = ["Messi","Lionel","#30","Paris-Saint Germain"];

const [soccerFirstName, soccerLastName, soccerNumber]=
soccerPlayerArray;

console.log(`The player is ${soccerFirstName} ${soccerLastName} and he plays number ${soccerNumber}`);


//Array rest operator

const vacationDestination = ["Paris","Europe","Summer"];
const [vacationLocation, ...vacationDetails] = vacationDestination;
console.log(vacationLocation);
console.log(vacationDetails);

const personDetails = ["Jean","Kigali"];
const[personName, personCity, personProfession = "Software engineering"]
 = personDetails;

console.log(personName);
console.log(personCity);
console.log(personProfession); 
//--------------------------------
const [firstActor,secondActor,...remainingActors] = actors;
console.log(firstActor);
console.log(secondActor);
console.log(remainingActors);