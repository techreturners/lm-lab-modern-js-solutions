import { longPasswords } from "./declarative_vs_imperative";

test("it returns passwords with a length greater than 9", () => {
  const passwords = [
    "password123",
    "i_love_coding",
    "password",
    "iforgotagain",
  ];
  expect(longPasswords(passwords)).toStrictEqual([
    "password123",
    "i_love_coding",
    "iforgotagain",
  ]);
});
