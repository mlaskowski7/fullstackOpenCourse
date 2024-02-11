import React from "react";

const Form = ({
  handleSubmit,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  handleSearchChange,
  search,
}) => {
  return (
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
  );
};

export default Form;
