// // let num = 4.6;

// // console.log(-4 / 0);

// // console.log("string" * 9);

// // const persone = "Alex";

// // const bool = true;

// // let und;
// // console.log(und);

// // const obj = {
// //   name: "John",
// //   age: 25,
// //   isMarried: false,
// // };

// // console.log(obj.name);

// // let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];

// // console.log(arr[1]);

// // const result = confirm("Are you here?");
// // console.log(result);

// // const answer = +prompt("U are 18?", "18");
// // console.log(typeof answer);

// // const answers = [];

// // answers[0] = prompt("Whats ur name?", "");
// // answers[1] = prompt("Whats ur surname?", "");
// // answers[2] = prompt("How old r u?", "");

// // document.write(answers);
// // console.log(typeof answers);

// // console.log(typeof null);

// const category = "toys";
// console.log(`https//someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello, ${user}`);

// console.log("arr" + " - object");
// console.log(4 + "5");

// let incr = 10,
//   decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== "6");

// const isChecked = false,
//   isClose = false;
// console.log(isChecked || !isClose);

// const numberOfFilms = +prompt("How many films did you watch?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   geners: [],
//   privat: false,
// };

// const a = prompt("One of the last films: ", ""),
//   b = prompt("How would you rate it?", ""),
//   c = prompt("One of the last films: ", ""),
//   d = prompt("How would you rate it?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//   console.log("ok!");
// } else {
//   console.log("error");
// }

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("a lot");
// } else {
//   console.log("ok!");
// }

// num === 50 ? console.log("ok!") : console.log("error");
const num = 50;
switch (num) {
  case 49:
    console.log("false");
    break;

  case 100:
    console.log("false");
    break;

  case 50:
    console.log("true");
    break;

  default:
    console.log("not today");
    break;
}

const hamburger = 3;
const fries = 0;
const cola = 0;

if (hamburger || cola || fries) {
  console.log("We are happy");
} else {
  console.log("We are leeving");
}

// console.log(hamburger == 3 && cola && fries);
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log("gsgs" && 0);
