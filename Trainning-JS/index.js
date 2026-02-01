//
// /
//
// /
// /

//const messages = [
//   "Your heart beats about 100,000 times a day, pumping around 2,000 gallons of blood through your body.",
//   "Babies are born with around 300 bones, but adults only have 206.",
//   "Most people shed up to 35 kilograms of skin in their lifetimes.",
// ]);

//messages.forEach((message, i) => {
// console.log("messages : ", message, "index : ", i + 1);
//});

// const cost = [120, 15, 100, 445];
// let totalcost = cost.reduce((acc, currtenValue) => {
//return acc + currtenValue;
//});
//console.log(cost, "cost =", totalcost);
//let discount = totalcost - (totalcost - 5) / 100;
//console.log(" discount =", discount);

//const numbers = [1, 2, 3, 4, -5, 6];

//let totalValue = numbers.reduce((acc, currVal) => {
// return acc + currVal;
//}, 0);

//console.log("total value:", totalValue);

//let totalNumber2 = 0;
//for (let i = 0; i < numbers.length; i++) {
//totalNumber2 += numbers[i];
//}

//for (let num of numbers) {
//// totalNumber2 += num;
//}

//console.log("total number 2:", totalNumber2);

const movies = [
  { year: 2026, name: "Send Help", Language: "English" },
  { year: 2011, name: "Intouchables", Language: "French" },
  { year: 2026, name: "The Mauritanian", Language: "English" },
  { year: 2023, name: "Shingeki no kyojin", Language: "Japanese" },
];
//const filtermovies = movies.map((movie) => {
// return { year: movie.year, name: movie.name };
//});

//console.log(filtermovies);

let moveyear1 = [];

for (let i = 0; i < movies.length; i++) {
  let y = moveyear1.push(movies[i].year);
}
{
}

for (let year1 of moveyear1) {
  console.log(year1);
}

//const movieName = movies.filter(
//(movie) => movie.name !== "Intouchables" || "The Mauritanian",
//);
//const movieyear = movies.filter((movie) => movie.year!== 2026);

//let movieLanguage = movies.find((movie) => movie.Language == "Japanese");

//console.log("move Name", movieName);
//console.log("move year", movieyear);
//console.log("moveLanguage", movieLanguage);
