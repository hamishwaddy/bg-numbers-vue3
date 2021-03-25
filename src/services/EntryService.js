import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://orriebetes.herokuapp.com/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getLatestEntry() {
    return apiClient.get("/entries.json?count=1");
  },
};
