import React, { useState } from 'react'
import Button from '../Button';
const SearchUsers = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const onChangeHandler=(e)=>{
        setSearchValue(e.target.value)

    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        props.onSearchUser(searchValue)
        setSearchValue("")
    }

    const {hasClearUser} =props;

    return (
        <div className='search-users-container'>
            <form onSubmit={onSubmitHandler} >
                <div>
                    <input
                        name="keyword"
                        value={searchValue}
                        onChange={onChangeHandler}
                        className="search-input"
                        placeholder='Enter key word'
                    />
                </div>
                <Button 
                    label="Search" 
                    buttontype="secondary" 
                    fullwidth={true} 
                    type="submit"
                    className="mb-2"
                />
                {
                    hasClearUser&&
                    (
                        <Button label="Clear users" 
                        buttontype="primary" 
                        fullwidth={true}
                        onClick={()=>props.onClearUser()}
                 />
                    )

                }
                


            </form>
        </div>
    )
}

export default SearchUsers;