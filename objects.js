//Easy object creation
const person = {
    name: ["sara", "Radic"],
    fullName: {
      first: "Sara",
      last: "Radic",
    },
    age: 24,
    bio: function () {
      console.log(
        `My name is ${this.name[0]} ${this.name[1]} and i am ${this.age}.`
      );
    },
    hi() {
      console.log(`Hello ${this.name}.`);
    },
  };
  console.log(person.bio());
  console.log(person.name);
  console.log(person.hi());
  console.log(person.fullName);
  console.log(person["fullName"]["first"]);
  //Changing or adding obj
  person.name[0] = ["Hanna"]; 
  console.log(person.name);
  person["eyes"] = "hazel";
  console.log(person.eyes);
  person.farewell = function () {
    console.log("Bye everybody!");
  };
  console.log(person.farewell());

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;
// console.log(person["height"]); // hur ska jag logga den?
// console.log(person);

const boy = {
  name: "joe",
  age: 28,
};
function whichBoy(item) {
  console.log(boy[item]);
}
whichBoy("name");


//återanvändning av objektets funktion
const person1 = {
  name: "Miranda",
  introduction() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person1.introduction();

const person2 = {
  name: "Max",
  introduction() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person2.introduction();


//Att skapa obj och kunna återanvända den
function createPerson(name) {
    let obj = {};
    obj.name = name;
    obj.hello = function () {
      console.log(`My name is ${this.name}`);
    };
    return obj;
  }
  const sara = createPerson("Sara");
  
  console.log(sara.hello());// My name is Sara
  
  const Bozana = createPerson("Bozana");
  Bozana.name;
  Bozana.hello();//My name is Bozana
  
  //The new way to create and use obj syntax
  function Person(name){
  this.name = name;
  this.introduction = function (){
      console.log(`My name is ${this.name}`);
  }};
  const Iva = new Person ("Iva");
  Iva.name;
  Iva.introduction();