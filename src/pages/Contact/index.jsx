import { contacts } from "../../data/contacts";
import React, { useState } from "react";

/*const [data, setData] = useState([
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
    { id: 4, name: "Mary", age: 35 },
]);*/

  function getNames() {
    return contacts.map((person) => person.name);
  }

  function getIdsOver30() {
    return contacts.filter((person) => person.age > 30).map((person) => person.id);
  }

  function getAverageAge() {
    const sum = contacts.reduce((acc, person) => acc + person.age, 0);
    return sum / contacts.length;
  }

  function getAgeDistribution() {
    const over30 = contacts.filter((person) => person.age > 30).length;
    const under30 = contacts.filter((person) => person.age <= 30).length;
    return { over30, under30 };
  }

  function getNamesInOrder() {
    return contacts.map((person) => person.name).sort();
  }

  function getAgeCount() {
    const ageCount = {};
    contacts.forEach((person) => {
      ageCount[person.age] = (ageCount[person.age] || 0) + 1;
    });
    return ageCount;
  }

  function getNamesOver30InReverseOrder() {
    return contacts
      .filter((person) => person.age > 30)
      .map((person) => person.name)
      .sort((a, b) => b.localeCompare(a));
  }

  function getAgeCountInOrder() {
    const ageCount = getAgeCount();
    const ages = Object.keys(ageCount).map((age) => parseInt(age));
    ages.sort((a, b) => a - b);
    const ageCountInOrder = {};
    ages.forEach((age) => {
      ageCountInOrder[age] = ageCount[age];
    });
    return ageCountInOrder;
  }

export const Contact = () => {    
    return (
      <>
          <div>
              <p>Names: {getNames().join(", ")}</p>
              <p>Ids over 30: {getIdsOver30().join(", ")}</p>
              <p>Average age: {getAverageAge()}</p>
              <p>Age distribution: {JSON.stringify(getAgeDistribution())}</p>
              <p>Names in order: {getNamesInOrder().join(", ")}</p>
              <p>Age count: {JSON.stringify(getAgeCount())}</p>
              <p>
                  Names over 30 in reverse order:{" "}
                  {getNamesOver30InReverseOrder().join(", ")}
              </p>
              <p>Age count in order: {JSON.stringify(getAgeCountInOrder())}</p>
          </div>
      </>
    );
};