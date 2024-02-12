import React, { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Form from "./components/Form";
import axios from "axios";

const App = () => {
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("fullfiled");
      setPersons(response.data);
    });
  }, []);

  const [persons, setPersons] = useState([]);
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
      <Form
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        handleSearchChange={handleSearchChange}
        search={search}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        search={search}
        persons={persons}
        filteredPersons={filteredPersons}
      />
    </div>
  );
};

export default App;
