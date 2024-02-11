import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let notThere = true;
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already used`);
        notThere = false;
      } else if (person.number === newNumber) {
        alert(`${newNumber} is already used`);
        notThere = false;
      }
    });
    if (notThere) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPersons = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.number.includes(search)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Search: <input value={search} onChange={handleSearchChange} />
        </div>
        <div>
          name : <input value={newName} onChange={handleNameChange} />
          number : <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
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
    </div>
  );
};

export default App;
