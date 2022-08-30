const { containsDuplicate, containsDuplicate2 } = require("./index");

// test("String Returning Hello Jest", () => {
//   expect(sayHello()).toMatch("Hello World!");
// });

// describe("Say Hello", () => {
//   it("Returns Hello World!", () => {
//     expect(sayHello()).toMatch("Hello World");
//   });
// });

describe("Contains Duplicate Question 217", () => {
  it("Returns true if value appears at least twice", () => {
    expect(containsDuplicate([1, 2, 2, 3, 4])).toBe(true);
  });

  it("Returns false, if no duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false);
  });

  it("Return false if empty", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it("Returns false if null", () => {
    expect(containsDuplicate([])).toBe(false);
  });
});

describe("Contains Duplicate Question 217 - 2", () => {
  it("Returns true if value appears at least twice", () => {
    expect(containsDuplicate2([1, 2, 2, 3, 4])).toBe(true);
  });

  it("Returns false, if no duplicates", () => {
    expect(containsDuplicate2([1, 2, 3, 4, 5])).toBe(false);
  });

  it("Return false if empty", () => {
    expect(containsDuplicate2([])).toBe(false);
  });

  it("Returns false if null", () => {
    expect(containsDuplicate2([])).toBe(false);
  });
});

// Grouping tests
// describe("Testing with done")

// If an error Throw error

// Testing if an error is thrown toThrowError

// Testing coverage jest --coverage
