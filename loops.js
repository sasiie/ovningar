//For...of function
//1.
const order = ["1", "2", "3", "4"];
for (const number of order){
    console.log(number);
}
//1.2
let people2 = ["anna", "kalle", "maja"];
for (const name of people2){
    console.log(name);
}

//////////////

//For loop
//2.
let str = ''; //låt den vara öppen
for (let i = 0; i < 9; i++){ //memorera det
    str = str + i; //skriv inte någon (let/const osv)
}
console.log(str);// 012345678

//2.2.
let people = ["anna", "kalle", "maja"];
for (let i = 0; i < 0; i++){ 
  people += i;
}
console.log(people); //0: ger bara namnen, siffror: ger också numer efter namn

