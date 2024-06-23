import React from "react";
import axios from "axios";
import rateLimit from "axios-rate-limit";
const axiosClient = rateLimit(
  axios.create({
    baseURL: "https://pokeapi.co/api/v2",

    headers: { "Content-Type": "application/json" },
  }),
  { maxRequests: 20, perMilliseconds: 150, maxRPS: 2 }
);

export default axiosClient;
