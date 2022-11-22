// Instructions to this exercise can be found in functions_2.md

// Function Declarations ⭐️

const people = ["Heather", "Barry", "John", "Maria"];
people.forEach(logPerson);

function logPerson(person) {
  console.log("The person is " + person);
}

// Functions as a Value ⭐️

const pets = ["Twinkle", "Toby", "Mr Snuggles", "Hissy McGee"];
pets.forEach(logPet);
const logPet = function (pet) {
  console.log("The pet is " + pet);
};
