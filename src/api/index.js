import axios from 'axios';

const url = "https://fakestoreapi.com/products";


export const getPosts = () => axios.get(url);