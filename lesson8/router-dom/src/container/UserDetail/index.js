
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import { UserApi } from '../../services/UserApi';

const UserDetail = () => {
    const [user,setUser]=useState();
    const [repos,setRepos]=useState();

    const urlParams=useParams();
    const {login}= urlParams
    const empty = <h1>No Data-2</h1>

    useEffect(()=>{
        const fetchUserDetail =async ()=>{
            try{
                const apiUserDetail= await UserApi.fetchUserInfo(login);            
                const apiResponseRepos=await UserApi.fetchRepos(login);
                setUser(apiUserDetail.data);
                setRepos(apiResponseRepos.data);

            }catch(error){
            console.log(error);
            }
        }
        fetchUserDetail();
    },[])

  return (
    <div>
        {
            user ?
                JSON.stringify(user)
                :
                (empty)
        }
        
    </div>
  )
}

export default UserDetail;