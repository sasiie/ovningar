// 5.1 Spread med objekt (2p)
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

const car = {
    name: "Volvo",
    speed: 120,
  };
  
  function addIsFast(car) {
const fastCar = {...car, isFast: car.speed > 100};
return fastCar
  }
console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }

const car2 = {
  name: "Volvo",
  speed: 120,
};

function addIsFast(car) {
return {...car, isFast: car.speed > 100}; // du kan inte ha variabelns namn i returnen ["you cannot access before innialization"]
};
console.log(addIsFast(car2));

// 5.2  Spread med arrayer (2p)
// Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
// och använder spread operatorn för att kombinera dem till en enda array.
// Returnera den nya arrayen

function combineArrays(arr1, arr2) {
const arr3 = [...arr1,...arr2];
return arr3

};
console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]

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
let totalPrice = 0;
shoppingCart.forEach((product) => {
  const model = product.model;
  const price = prices[model];
  totalPrice += price; 
});
return totalPrice;
};
console.log(calculateTotalPrice2(shoppingCart, modelPrices)); // [550]


