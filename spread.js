const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };

  function uppdatePerson(person, adress){
    return {...person, adress:{
        ...person.adress,...newAdress},{...}
    }
  };
  const newAdress = {
    city: "Stockhol",
    state: "Sweden" };

console.log(uppdatePerson(person,newAdress));