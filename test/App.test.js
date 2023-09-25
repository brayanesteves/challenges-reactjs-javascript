import {
    getNames,
    getIdsOver30,
    getAverageAge,
    getAgeDistribution,
    getNamesInOrder,
    getAgeCount,
    getNamesOver30InReverseOrder,
    getAgeCountInOrder,
  } from "./App"; // import the functions to be tested
  const mockData = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
    { id: 4, name: "Mary", age: 35 },
  ];
  
  // testing getNames function
  test("getNames returns an array of names", () => {
    expect(getNames(mockData)).toEqual(["John", "Jane", "Bob", "Mary"]);
  });
  
  // testing getIdsOver30 function
  test("getIdsOver30 returns an array of ids of people over 30", () => {
    expect(getIdsOver30(mockData)).toEqual([3, 4]);
  });
  
  // testing getAverageAge function
  test("getAverageAge returns the average age of people in the array", () => {
    expect(getAverageAge(mockData)).toEqual(32.5);
  });
  
  // testing getAgeDistribution function
  test("getAgeDistribution returns an object with the count of people over 30 and under 30", () => {
    expect(getAgeDistribution(mockData)).toEqual({ over30: 2, under30: 2 });
  });
  
  // testing getNamesInOrder function
  test("getNamesInOrder returns an array with names in alphabetical order", () => {
    expect(getNamesInOrder(mockData)).toEqual(["Bob", "Jane", "John", "Mary"]);
  });
  
  // testing getAgeCount function
  test("getAgeCount returns an object with the count of people with a unique age", () => {
    expect(getAgeCount(mockData)).toEqual({
      25: 1,
      30: 1,
      35: 1,
      40: 1,
    });
  });
  
  // testing getNamesOver30InReverseOrder function
  test("getNamesOver30InReverseOrder returns an array of names of people over 30 in reverse alphabetical order", () => {
    expect(getNamesOver30InReverseOrder(mockData)).toEqual(["Mary", "Bob"]);
  });
  
  // testing getAgeCountInOrder function
  test("getAgeCountInOrder returns an object with the count of people with a unique age in ascending order", () => {
    expect(getAgeCountInOrder(mockData)).toEqual({
      25: 1,
      30: 1,
      35: 1,
      40: 1,
    });
  });