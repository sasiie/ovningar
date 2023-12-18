let line = "Hello good world! Good to see you";
let readLine = line.length;

console.log(readLine);
console.log(line[-1]);

let findLine = line.indexOf("world");
console.log(findLine);

if (line.includes("r")) {
  console.log("found it!");
} else {
  console.log("Didn't find it");
}
let firstWord = line.indexOf("Good");
let secondWord = line.indexOf("Good", firstWord + 1);

console.log(firstWord);
console.log(secondWord);

let takeOut = line.slice(6);
console.log(takeOut);


//Mer av obj funktioner
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  greeting = function (){
    console.log(`Hello, said ${cat.name} the ${cat.breed}.`);
  }
console.log(cat.greeting());


cat.greeting = () => {
    console.log(`Hello, said ${cat.name} the ${cat.breed}.`);
  };
  cat.greeting();
  const cat2 = {
    name: "Garo",
    breed: "baby",
    color: "black",
    greeting: function() {
        console.log(`Hello, said ${cat2.name} my ${cat2.breed}.`);
      }
  }
  cat2.greeting();

  function Cat3(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function() {
      console.log(`Hello, said ${this.name} the ${this.color} ${this.breed}.`);
    };
  }
  const cat3 = new Cat3("Garo", "black", "babyyy");
  cat3.greeting();

// 1.1 (2p) Använd forEach för att lägga ihop orden i words-arrayen till ett långt ord
// som sparas i variabeln myWord. JOIN!!!!!!!!
let myWord = "";
const words = ["programming", "is", "fun"];

words.forEach((word) => (myWord += word));

console.log(myWord); // Ska logga: "programmingisfun";