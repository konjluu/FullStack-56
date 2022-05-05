import React,{useState}from 'react'

import SearchUsers from '../../component/searchUsers';
import UserList from "../../component/userList"
import { UserApi } from '../../services/UserApi';

export const SearchPage = (props) => {
    const [users,setUsers]=useState([]);
    const [isError,setIsError]=useState(false);
    const [isLoading,setIsLoading]= useState(false);

    const onSearchUser=async (keyword)=>{
        if(!keyword){
            setIsError(true);
            setTimeout(()=>{
                setIsError(false)
            },
                2000
            )
            return;
        }

        setIsLoading(true);
        try{
            const apiResponse=await UserApi.searchUser(keyword);
            const userData=apiResponse?.data?.items || [];
            setUsers(userData);
        }catch(error){
            console.log(error);
            setIsLoading(true);
        }
        setIsLoading(false);

    }

    const onClearUser=()=>{
        setUsers([])
    }

  return (
    <div className='mt-5'>
        {isError && (
            <p className='alert alert-danger mb-3'>
                Please enter the keyword before searching...
            </p>
        )
        }
        <SearchUsers onSearchUser={onSearchUser} onClearUser={onClearUser} />
        <UserList users={users} loading={isLoading} />
    </div>
  )
}

export default SearchPage;
