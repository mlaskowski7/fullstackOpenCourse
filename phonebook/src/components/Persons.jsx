import React from "react";

const Persons = ({ search, persons, filteredPersons }) => {
  return (
    <ul>
      {search !== ""
        ? filteredPersons.map((person) => (
            <li key={person.name}>
              {person.name}: {person.number}
            </li>
          ))
        : persons.map((person) => (
            <li key={person.name}>
              {person.name} : {person.number}
            </li>
          ))}
    </ul>
  );
};

export default Persons;
