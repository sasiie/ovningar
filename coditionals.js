let shoppingDone = false;
let allowance;
if(shoppingDone === true){
    allowance = 15;
}else{
    allowance = 5;
};
console.log(allowance);//bc shoppingDone is false it jumps over the first statement'

//en lång conditional kod
function howFast (number){
if(number === 100){
    return("Fast");
}else if(number >= 30 && number <= 50) {
    return("Medium");
}else if(number <= 20) {
    return("Slow");
}else{
    return ("unknown");
}
};
console.log(howFast(20)); // Ska logga "Slow"
console.log(howFast(50)); // Ska logga "Medium"
console.log(howFast(100)); // Ska logga "Fast"
console.log(howFast(25)); // Ska logga "Unknown"