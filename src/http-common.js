import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/angularEmployee/Clinic/",
  headers: {
    "Content-type": "application/json"
  }
});