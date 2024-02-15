import React, { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Form from "./components/Form";
import phonebookService from "./services/phonebook";

const App = () => {
  useEffect(() => {
    console.log("effect");
    phonebookService.getAll().then((response) => {
      console.log("fullfiled");
      setPersons(response.data);
    });
  }, []);

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const deleteHandler = (person) => {
    if (window.confirm("Are you sure you want to delete the person?")) {
      phonebookService.deletePerson(person.id).then(() => {
        setPersons(persons.filter((filtering) => filtering.id != person.id));
      });
    }
  };

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
      phonebookService
        .post({ name: newName, number: newNumber })
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });
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
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App;
