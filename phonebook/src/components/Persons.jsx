import React from "react";

const Persons = ({
  search,
  persons,
  filteredPersons,
  deleteHandler,
  }) => {
  return (
    <ul>
      {search !== ""
        ? filteredPersons.map((person) => (
            <li key={person.name}>
              {person.name}: {person.number}
              <button onClick={() => deleteHandler(person)}>DELETE</button>
            </li>
          ))
        : persons.map((person) => (
            <li key={person.name}>
              {person.name} : {person.number}
              <button onClick={() => deleteHandler(person)}>DELETE</button>
            </li>
          ))}
    </ul>
  );
};

export default Persons;
