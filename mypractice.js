const buidingInformation = {
  location: "Zeaferaniyeh",
  Number: 116,
  area: 1000,
};

let { location: region, Number, area, floor = "Second" } = buidingInformation;

console.log(region, Number, area, floor);

const iranCapitalCity = "Tehran";

const [letter1, letter2, letter3, letter4, letter5, letter6] = iranCapitalCity;
console.log(letter1, letter2, letter3, letter4, letter5, letter6);

// const coutries = ["Germany", "Poland", "Austria", "USA", "Canada"];

// let [Germany, Poland, Austria, USA, Canada, Australia] = coutries;
// console.log(Germany, Poland, Austria, USA, Canada, Australia);

// const coutries = ["Germany", "Poland", "Austria", "USA", "Canada"];
// let [Germany, , Austria, , Canada] = coutries;

// console.log(Germany, Austria, Canada);

// const coutries = ["Germany", "Poland", "Austria", "USA", "Canada"];
// let [Germany, , Austria, ...rest] = coutries;

// console.log(Germany, Austria, rest);

const mainFottballTeam = "Manchester United";
const footballTeamRegExp = /chester /g;

const matchedRegExp = mainFottballTeam.match(footballTeamRegExp);
console.log(matchedRegExp);

const substitutedFottballTeam = "Manchester United chester ";
const wholematchedRegExp = substitutedFottballTeam.matchAll(footballTeamRegExp);

// const converteddWholematchedRegExp = [...substitutedFottballTeam.matchAll(footballTeamRegExp)];

// for(let element of converteddWholematchedRegExp){
//   console.log(element[0])
// }
for (let element of wholematchedRegExp) {
  console.log(element);
}

console.log(wholematchedRegExp);
// console.log(converteddWholematchedRegExp);
