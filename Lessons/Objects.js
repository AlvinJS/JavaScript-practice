// creating an object

let soccerPlayer = {
    name: "Paul Pogba",
    age: 28,
    height: 1.91,
    position: "Midfielder",
    dominantFoot: "right",
    currentClub: "Manchester United",
    nationaly: "French",
    titles: ["UEFA Europa Cup","World Cup","Serie A Title"],
    totalGoals: 78,
    totalAssists: 85,
    totalGamesPlayed: 413,
    weeklySalary: 290000,

    transfer: function(clubName){
        this.currentClub = clubName;
    },

};

//printing out player's information
console.log(`\n\nThe soccer player's name is ${soccerPlayer.name}\nHe is a ${soccerPlayer['nationaly']} player who currently plays for ${soccerPlayer.currentClub} football club as a ${soccerPlayer['position']}.\n\n`);

//adding new titles to the player
soccerPlayer.titles.push("UEFA Champion's League");

//Changing the player's dominant leg
soccerPlayer['dominantFoot'] = "Left";

//Deleting a property
delete soccerPlayer.totalGamesPlayed;

//Adding a new stat to the player's list of information
soccerPlayer.redCards = 4; 

//displaying all keys and their respective values
for (var key in soccerPlayer){
    console.log(`${key} : ${soccerPlayer[key]}`);
}

// transfering the player to a new club and printing out transfer information.
soccerPlayer.transfer("Real Madrid");

console.log(`\n\n${soccerPlayer.name} has been transfered to  ${soccerPlayer.currentClub}`);


//-------------------------------------------------------------------

//Object destructuring

let courseDetails = {
    subject: "JavaScript",
    version: "ES6 JS",
    year: 2021,
    attendance: 20

}
let {subject:language, version:vs} = courseDetails;
console.log(language);
console.log(vs);

let {year,...rest} = courseDetails;
console.log(year);
console.log(rest);

let {name:playerName, position,currentClub:club} = soccerPlayer;
let {dominantFoot,...playerInfo} = soccerPlayer;
console.log(playerName);
console.log(position);
console.log(club);
console.log(dominantFoot);
console.log(playerInfo);