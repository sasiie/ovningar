function double(num) {
  return num * 2;
}
let num2 = [2, 3, 24];
console.log(num2.map(double));

function longest(name) {
  return name.length > 4;
}
let names = ["Sara", "Iva", "Bozana", "Filip", "Jure"];
console.log(names.filter(longest));

// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

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
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter
// som input och returnerar det totala priset

const products = [
  { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
  { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
];

const products2 = [
  { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
  { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
  { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
];
function calculateTotalPrice(shoppingCart) {
  let totalPrice = 0;
  shoppingCart.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}
console.log(calculateTotalPrice(products)); // Ska logga 220
console.log(calculateTotalPrice(products2)); // Ska logga 330

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
function filterEvenNumbers (numbers){
    let filteredNumbers = numbers.filter((number) => {
        return number % 2 == 0;
    });
return filteredNumbers;
};
let numbers = [100, 45, 3, 50];
console.log(filterEvenNumbers(numbers));


function countriesWithoutI (country){
let filteredCountries = countries.filter((country) => {
return country.toUpperCase(includes("i"));
});
return filteredCountries;
};
let countries = ["Spain", "Sweden", "France", "Ireland"];
console.log(countriesWithoutI(countries));