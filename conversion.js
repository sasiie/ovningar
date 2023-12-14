let radic = "Sara,Iva,Bozana,Filip,Jure";

let toArray = radic.split(",");
console.log(toArray); //["Sara", "Iva", "Bozana", "Filip", "Jure"]
console.log(toArray[0]); // Sara

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
// myArray.forEach(function( name, index) {
//     let newName = ${name}${index};
// });

console.log(myArray);
console.log(newArray);