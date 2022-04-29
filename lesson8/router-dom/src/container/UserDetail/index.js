
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import { UserApi } from '../../services/UserApi';

const UserDetail = () => {
    const [user,setUser]=useState();
    const [repos,setRepos]=useState();

    const urlParams=useParams();
    const {login}= urlParams

    useEffect(()=>{
        const fetchUserDetail =async ()=>{
            try{
                const apiUserDetail= await UserApi.fetchUser({login});            
                const apiResponseRepos=await UserApi.fetchRepos({login});
                setUser(apiUserDetail.data);
                console.log(apiResponseRepos.data)
                setRepos(apiResponseRepos.data);

            }catch(error){
            console.log(error);
            }
        }
        fetchUserDetail();
    },[])

  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default UserDetail;