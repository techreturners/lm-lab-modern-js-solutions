// Instructions can be found in declarative_vs_imperative.md

const passwords = [
  "123456",
  "password",
  "admin",
  "freecodecamp",
  "mypassword123",
];

// *Original function below*

// export function longPasswords(passwords) {
//   let longPasswords = [];

//   for (let i = 0; i < passwords.length; i++) {
//     const password = passwords[i];
//     if (password.length >= 9) {
//       longPasswords.push(password);
//     }
//   }
//   return longPasswords;
// }

// *Solution*

export const longPasswords = (passwords) =>
  passwords.filter((password) => password.length >= 9);

console.log(longPasswords(passwords));
