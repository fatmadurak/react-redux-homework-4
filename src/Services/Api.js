import axios from "axios";

export const fetchProducts = () => {
  return axios.get('https://northwind.vercel.app/api/products')
    .then((response) => {
    
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
