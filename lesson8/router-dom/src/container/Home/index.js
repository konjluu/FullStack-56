import React, { useEffect, useState } from 'react'
import axios from "axios"
import UserList from '../../component/userList';
import { UserApi } from '../../services/UserApi';

const HomePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const apiResponse = await UserApi.fetchUser();
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