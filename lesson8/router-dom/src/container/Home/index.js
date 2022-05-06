import React, { useEffect, useState } from 'react'
import UserList from '../../component/userList';
import { UserAPI } from '../../services/UserApi';

const HomePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const apiResponse = await UserAPI.fetchUsers();
                setUsers(apiResponse.data);
                // setUsers([]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, []);

    return (
        <div>
            <UserList users={users} />
        </div>
    )
}

export default HomePage;