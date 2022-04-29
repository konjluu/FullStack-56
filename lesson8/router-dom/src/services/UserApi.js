import axios from "axios"
export const baseUrl="https://api.github.com";
export const UserApi= {
    fetchUser : ()=>{
        return axios.get(`${baseUrl}/users`)
    },

    fetchUserInfo :(username)=>{
        return axios.get(`${baseUrl}/users/${username}`)
    },
    fetchRepos :(username)=>{
        return axios.get(`${baseUrl}/users/${username}/repos`)
    }
}
