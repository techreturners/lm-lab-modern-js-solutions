const sequence = require("./destructuring_arrays");

test("it returns the correct order from an array", () => {
  const order = ["First", "Second", "Third"];
  expect(sequence(order)).toBe("First, Second, Third");
});
