import React from 'react';
import {useAuth0} from "@auth0/auth0-react"
import '../CSS/userLogInAuth.css'


const UserLogOutAuth = () => {
    const {logout} = useAuth0();

    return (
        <div>
            <button onClick={() => logout()}>Log Out</button>
        </div>
    );
}

export default UserLogOutAuth;
