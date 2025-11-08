import axios from "axios";

const API_URL = "http://localhost:8456/Api/products"; // 👈 Your backend URL

export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addProduct = async (product) => {
  const res = await axios.post(API_URL, product);
  return res.data;
};
