// Instructions can be found in destructuring_objects.md

// *Original function below*

// function introduction(person) {
//   const name = person.name;
//   const city = person.city;
//   const pet = person.pet;

//   return "Hello my name is " + name + " and I live in " + city + " with " + pet;
// }

// *Solution*

//prettier-ignore
function introduction({ name, city, pet }) { // <--- 2) destructuring moved up into the parameters 🔥 🔥

  // const {name, city, pet} = person; <--- 1) destructuring 🔥

  return "Hello my name is " + name + " and I live in " + city + " with " + pet;
}

module.exports = introduction;
