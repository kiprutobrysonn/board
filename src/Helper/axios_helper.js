// import axios from "axios";

// const getAuthToken = () => {
//   // return window.localStorage.getItem("auth_token");
// };

// const setAuthHeader = (token) => {
//   // window.localStorage.setItem("auth_token", token);
// };

// axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.headers.post["Content-Type"] = "application/json";

// const request = (method, url, data) => {
//   let headers = {};
//   if (getAuthToken() !== null && getAuthToken() !== "null") {
//     headers = { Authorization: `Bearer ${getAuthToken()}` };
//   }

//   return axios({
//     method: method,
//     url: url,
//     headers: headers,
//     data: data,
//   });
// };

// export default {
//   getAuthToken,
//   setAuthHeader,
//   axios,
//   request,
// };
