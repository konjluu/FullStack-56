import React, { useState } from 'react'
import Button from '../Button';
const SearchUsers = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='search-users-container'>
            <form >
                <input />
                <Button label="Search" type="secondary" FullWidth={true} />
                <Button label="Clear users" type="primary" FullWidth={true} />


            </form>
        </div>
    )
}

export default SearchUsers;