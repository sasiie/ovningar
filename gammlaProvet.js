// 1. Booleans (3p)
// Skriv en funktion howFast som tar en siffra som input och
// returner följande sträng:
// "Fast" om siffran är högre eller lika med 100
// "Slow" om siffran är lägre eller lika med 20
// "Medium" om siffran är 30 till och med 50
// "Unknown" om inget av ovan stämmer

function howFast(number) {
   if (number >= 100){
    return "Fast";
   } else if (number >= 30 && number <= 50){
    return "Medium";
   } else if (number <= 20){
    return "Slow";
   } else {
    return "Unknown";
   };
};
  console.log(howFast(20)); // Ska logga "Slow"
  console.log(howFast(50)); // Ska logga "Medium"
  console.log(howFast(100)); // Ska logga "Fast"
  console.log(howFast(25)); // Ska logga "Unknown"


  // 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
     const filteredWords = words.filter((word) => {
     return !word.includes("a")}); //[om du lägger till ! blir det tvärtom]
     return filteredWords;
   };
 
  console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]

  // 3. Shoppingcart (3p)
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter
// som input och returnerar det totala priset
  // 1. skapa variabel som håller reda på totala priset
  // 2. loopa listan och plocka ut priset för varje produkt.
  // 3. addera varje produkts pris till totala priset.
  // 4. returnera totala priset.
  //[TILLSKILLNAD FRÅN ANDRA, SÅ SKA DU INTE SKAPA NÅGON VARIABEL PÅ CODITIONALS(CART.FOREACH((....))) 
  //UTAN ENBART SKRIVA KODEN OCH RETURNERA SUMMAN!!!]
  
const products = [
    { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
    { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
  ];
  
  const products2 = [
    { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
    { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
    { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
  ];
  
function calculateTotalPrice(hej){
    let sum = 0;
    hej.forEach((what) => {
        return sum += what.price;
    });
    return sum;
};
  
  console.log(calculateTotalPrice(products)); // Ska logga 220
  console.log(calculateTotalPrice(products2)); // Ska logga 330


  // 4. Shoppingcart med separata priser (3p)
// Skriv klart funktionen calculateTotalPrice2 som tar en array med produkter
// och ett objekt med priser som input och returnerar det totala priset

const modelPrices4 = {
    EOS_70D: 100,
    D3400: 120,
    Hero_4: 80,
    Phantom: 50,
    Karma: 200,
  };
  
  const shoppingCart4 = [
    { name: "Camera", brand: "Canon", model: "EOS_70D" },
    { name: "Camera", brand: "Nikon", model: "D3400" },
    { name: "Camera", brand: "GoPro", model: "Hero_4" },
    { name: "Drone", brand: "DJI", model: "Phantom" },
    { name: "Drone", brand: "GoPro", model: "Karma" },
  ];
  
  function calculateTotalPrice2(sCart, pris) {
    // Din kod här
  let sum = 0;
  sCart.forEach((produkt) => { //[SHOPPINGCART KAN HETA VAD SOM BARA ATT DEN ÄR LIKADAN SOM I PARAMETERN]
    const model = produkt.model;
    const priset = pris[model]; //[MÅSTE STÅ PRICES OCH INTE PRICE DÅ DEN INTE KAN HÄMTA DEN INNAN DEN ÄR INITIERAD]
    return sum += priset;
  });
return sum;

  };
  console.log(calculateTotalPrice2(shoppingCart4, modelPrices4)); // Ska logga 550

  // 5.1 Spread med objekt (2p)
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

const car = {
    name: "Volvo",
    speed: 120,
  };
  
  function addIsFast(car) {
   return {...car, isFast: car.speed > 100}
  }
  console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }