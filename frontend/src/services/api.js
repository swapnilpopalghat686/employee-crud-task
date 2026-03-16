import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-crud-task.onrender.com/api",
});

export default API;