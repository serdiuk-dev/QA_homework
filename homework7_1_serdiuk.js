const regex = /\b[^aA]{6,}\b/g;

const testStrings = [
    "Wonderful",
    "Joyful",
    "Happiness",
    "Time",
    "Task",
    "Apple"
];

function findMatches(strings, regex) {
    return strings.filter(str => regex.test(str));
}

const matches = findMatches(testStrings, regex);
console.log(matches); 
