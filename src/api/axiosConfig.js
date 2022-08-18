import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://go-it-live.herokuapp.com/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    //   console.log(token)
    if (token) {
      config.headers["authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);