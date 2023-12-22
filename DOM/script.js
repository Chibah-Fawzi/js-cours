// var title = document.getElementById("hello");

// console.log(title);

// const greet = " Said";

// title.innerHTML += greet;

// // Modifier le css d'un élement
// title.style.color = "blue";
// title.style.backgroundColor = "#404040";

function DarkMode() {
  const body = document.querySelector("body");

  if (body.style.backgroundColor == "black") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
}

function GetData(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pwd").value;

  if (password.length <= 5) {
    alert("Le mot de passe doit être plus grand que 5");
  } else if (!/[A-Z]/.test(password)) {
    alert("Le mot de passe doit contenir au moins une lettre majuscule");
  } else if (!email.includes("@")) {
    alert("il doit être un email");
  }
}

// function test(nom) {
//   console.log(nom);
// }

// const test = (nom) => {
//   console.log(nom);
// };

// const test = function (nom = "N/D") {
//   console.log(nom);
// };

// test("omar");

let a = "hello";
let b = "world";

console.log(a + " " + b); // concatination
console.log(`bonjour ${a} ${b}`); // string template - string literals

// Destructuring
const user = {
  nom: "Omar",
  num: +21303030330,
  addresse: {
    city: "alger",
    bat: 40,
    zip: 16300,
  },
  famille: {
    femme: "aa",
    fils: "bb",
    fille: "cc",
  },
};
user.addresse;

var { addresse, famille } = user;

console.log(addresse.city);

// Array Functions

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

// Concatination
var result = array1.concat(array2);
var result2 = [...array1, ...array2];
console.log(result2);

// MAP
var mapped = array1.map((element) => {
  return element * 2;
});

const array = ["Omar", "Said", "Samira", "Loudja"];

console.log(array);
var strMap = array.map((element) => {
  return "DR. " + element;
});

console.log(strMap);
