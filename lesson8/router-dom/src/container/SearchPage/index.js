import React,{useState}from 'react'

import SearchUsers from '../../component/searchUsers';

export const SearchPage = (props) => {
    const [users,setUsers]=useState([]);
  return (
    <div>
        <SearchUsers />
    </div>
  )
}

export default SearchPage;
