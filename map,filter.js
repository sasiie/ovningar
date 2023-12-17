//map
let num2 = [2, 3, 24];
function double(num) {
  return num * 2;
}
console.log(num2.map(double)); //[4, 6, 48]

//filter
let names = ["Sara", "Iva", "Bozana", "Filip", "Jure"];
function longest(name) {
  return name.length > 4;
}
console.log(names.filter(longest)); //[Bozana, Filip]
//map
let names2 = ["Sara", "Iva", "Bozana", "Filip", "Jure"];
function longest(name) {
  return name.length > 4;
}
console.log(names.map(longest)); //[false, false, true, true, false]

let colours = ["red", "blue", "orange"];
console.log(colours.map((colour) => colour.length)); //[3, 4, 6]

// 2. String-arrays (3p)
function filterWordsWithLetterA(words) {
  let filteredWords = words.filter((words) => {
    return words.includes("a");
  });
  return filteredWords;
}
console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]

//ett annat liknande men renare sätt att koda den
function filterWordsWithLetterA2(words) {
  return words.filter((word) => word.indexOf("a") != -1);
}
console.log(filterWordsWithLetterA2(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]

// 3. Shoppingcart (3p)
// const products = [
//   { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
//   { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
// ];

// const products2 = [
//   { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
//   { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
//   { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
// ];
// function calculateTotalPrice(shoppingCart) {
//   let totalPrice = 0;
//   shoppingCart.forEach((product) => {
//     totalPrice += product.price;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice(products)); // Ska logga 220
// console.log(calculateTotalPrice(products2)); // Ska logga 330

// 4. Shoppingcart med separata priser (3p)
// Skriv klart funktionen calculateTotalPrice2 som tar en array med produkter
// och ett objekt med priser som input och returnerar det totala priset

const modelPrices = {
  EOS_70D: 100,
  D3400: 120,
  Hero_4: 80,
  Phantom: 50,
  Karma: 200,
};

const shoppingCart = [
  { name: "Camera", brand: "Canon", model: "EOS_70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero_4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

function calculateTotalPrice2(shoppingCart, prices) {
  let sum = 0;
  shoppingCart.forEach((product) => {
    const model = product.model; //det blir (shoppingCart.model)
    const price = prices[model]; //det blir (modelPrices.model)
    sum += price;
  });
  return sum;
}

console.log(calculateTotalPrice2(shoppingCart, modelPrices)); // Ska logga 550

//find the even numbers in the array of numbers. First create a function, use filter(arrowfunc),
//create the statements(with return), and return the statement inside
function filterEvenNumbers(numbers) {
  let filteredNumbers = numbers.filter((number) => {
    return number % 2 == 0;
  });
  return filteredNumbers;
}
let numbers = [100, 45, 3, 50];
console.log(filterEvenNumbers(numbers));




function countriesWithoutI (countries){
let filteredCountries = countries.filter((country) => {
return !country.toLowerCase().includes("i"); //(!):[exklusive i] (inget !): [inklusive i]
});
return filteredCountries;
};
let countries = ["Spain", "Sweden", "France", "Ireland"];
console.log(countriesWithoutI(countries));





const multipliedBy2 = (arr) => arr.map((num) => num * 2);
let numbers3 = [1, 6, 78];
console.log(multipliedBy2(numbers3));




const products5 = [
  { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
  { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
];

const products3 = [
  { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
  { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
  { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
];


// const goPro = { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 };
// const goProPrice = goPro.price; Såhär tänker datorn

function calculateTotalPrice(shoppingCart) {
  // Din kod här
let totalPrice = 0;
shoppingCart.forEach ((product) => {
totalPrice += product.price;
});
return totalPrice;
};

console.log(calculateTotalPrice(products5)); // Ska logga 220
console.log(calculateTotalPrice(products3)); //Ska logga 330