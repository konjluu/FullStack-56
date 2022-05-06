import axiosInstance from "../config/axios"

export const UserAPI = {
  fetchUsers: () => axiosInstance.get(`/users`),

  fetchUserInfo: (username) => axiosInstance.get(`/users/${username}`),

  fetchUserRepos: (username) => axiosInstance.get(`/users/${username}/repos`),

  searchUser: (keyword) => axiosInstance.get(`/search/users?q=${keyword}`),
};


// import axios from "axios"
// export const baseUrl="https://api.github.com";
// export const UserApi= {
//     fetchUser : ()=>{
//         return axios.get(`/users`)
//     },

//     fetchUserInfo :(username)=>{
//         return axios.get(`/users/${username}`)
//     },
//     fetchRepos :(username)=>{
//         return axios.get(`/users/${username}/repos`)
//     },
//     searchUser :(keyword)=>{
//         return axios.get(`/search/users?q=${keyword}`)
//     }
// }
