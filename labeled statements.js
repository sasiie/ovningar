let points = " ";

/* winner: */ for (let i = 0; i < 10; i++){
    if (i === 5){
        //break; // [01234]
       // break winner; //[01234] glöm inte då winner: i början
      // continue winner; // [0123456789]  glöm inte då winner: i början
    }
    points += i;
};
console.log(points);