import axios from "axios"
import axiosInstance from "../component/config"
export const UserApi= {
    fetchUser : ()=>{
        return axiosInstance.get(`/users`)
    },

    fetchUserInfo :(username)=>{
        return axiosInstance.get(`/users/${username}`)
    },
    fetchRepos :(username)=>{
        return axiosInstance.get(`/users/${username}/repos`)
    },
    searchUser :(keyword)=>{
        return axiosInstance.get(`/search/users?q=${keyword}`)
    }
}


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
