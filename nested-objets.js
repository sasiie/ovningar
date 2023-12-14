const band = {
    name : "One Direction",
    nationality: "Brittish",
    genre: "Pop",
    members: 5,
    formed: 2011,
    split: 2018,
    albums: [
      {name: "A", released: 2011 },
      {name: "B", released: 2012 },
      {name: "C", released: 2015 },
  ],
 bandinfo (){
    console.log(`This is ${this.name} and it is a ${this.nationality} ${this.genre}. They first made an album in ${this.albums[1].released} called ${this.albums[0].name}`);
  }
  };
  console.log(band.bandinfo());
