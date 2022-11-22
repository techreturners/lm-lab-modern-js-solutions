// Instructions can be found in destructuring_objects.md

function introduction({ name, city, pet }) {
  // const name = person.name;
  // const city = person.city;
  // const pet = person.pet;

  return "Hello my name is " + name + " and I live in " + city + " with " + pet;
}

module.exports = introduction;
