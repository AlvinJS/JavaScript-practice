//Capitalize the first letter of a word in a string.

const capitalizeWord = (word) => {
    const [firstLetter,...restOfWord] = word;
    return firstLetter.toUpperCase() + restOfWord.join('');
}

//Capitalize first letter of every word in a string
const capitalizeEachWord = (string) => {
    return string.split(" ").map(word => capitalizeWord(word)).join(" ");
}

console.log(capitalizeEachWord("have fun!"));