import axios from "axios";

// base url

const campaignsAPI = axios.create({
  baseURL: "http://localhost:3000/api/v1/campaigns",
});

const investmentsAPI = axios.create({
  baseURL: "http://localhost:3000/api/v1/investments",
});

export { campaignsAPI, investmentsAPI };
