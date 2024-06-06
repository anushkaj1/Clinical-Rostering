import React, { useState } from 'react'
import UserContext from './UserContext';

export default function UserState(props) {

    const [userData, setUserData] = useState("hello world");

    const handleSetUserData = async (data) => {
        setUserData(data);
    }

    return (
        <UserContext.Provider value={{handleSetUserData, userData}}>
            {props.children}
        </UserContext.Provider>
    )
}
