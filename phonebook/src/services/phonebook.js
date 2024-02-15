import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(url);
};

const post = (postObject) => {
  return axios.post(url, postObject);
};

export default { getAll, post };
