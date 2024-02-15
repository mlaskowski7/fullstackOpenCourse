import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(url);
};

const post = (postObject) => {
  return axios.post(url, postObject);
};

const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`);
};

export default { getAll, post, deletePerson };
