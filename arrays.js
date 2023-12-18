let shopping = ["24", 32, 33, 65, 64];
console.log(shopping[0]); //[24]

shopping[3] = "Blue";
console.log(shopping);//["24", 32, 33, "BLUE..."]

let colors = ["Blue", "Red", ["Pink", "Orange"]];
console.log(colors[2][1]); //Orange
console.log(colors[2].indexOf("Pink")); //0

//ta bort och spara det borttagna numret i en variabel
let num = [1, 2, 44, 16, 32];
let removedNum = num.pop();
console.log(removedNum); //32


let remove = num.indexOf(44);
if (remove !== -1) {
  num.splice(remove, 1);
}
console.log(num);//[1, 2, 16]




