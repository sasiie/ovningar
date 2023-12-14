// Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
let removeItem = birds.indexOf("Eagles");
birds.splice(removeItem, 1);
console.log(birds);


