// Instructions to this exercise can be found in functions_2.md

// *Solutions*

// Function Declarations ⭐️

const people = ["Heather", "Barry", "John", "Maria"];

people.forEach(logPerson); // <--- This is fine because function declarations are hoisted

function logPerson(person) {
  console.log("The person is " + person);
}

// Functions as a Value ⭐️

const pets = ["Twinkle", "Toby", "Mr Snuggles", "Hissy McGee"];

pets.forEach(logPet); // <--- This is NOT fine because function expressions are not hoisted (Reference Error)

const logPet = function (pet) {
  console.log("The pet is " + pet);
};
