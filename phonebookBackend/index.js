require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const Person = require("./models/person");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "something missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Person.findByIdAndDelete(id)
    .then((person) => {
      if (person) {
        console.log("Successfully deleted person: ", person);
      } else {
        console.log("No document found with that ID.");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

const date = new Date();

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`
  );
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
