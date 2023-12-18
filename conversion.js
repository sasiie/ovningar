// dela på orden
let radic = "Sara,Iva,Bozana,Filip,Jure";
let toArray = radic.split(",");
console.log(toArray); //["Sara", "Iva", "Bozana", "Filip", "Jure"]
console.log(toArray[0]); // Sara

//Joina alla igen
let toString = toArray.join(",");
console.log(toString);

let myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];
myArray.pop();
myArray.push("Sara", "Anna");
console.log(myArray);
myArray.forEach(function (element, index) {
  myArray[index] = `${element} (${index})`;
});
let newArray = myArray.join("-");

console.log(myArray);
console.log(newArray);