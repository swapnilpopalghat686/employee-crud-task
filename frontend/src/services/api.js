import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-crud-task-1.onrender.com/api",
});

export default API;