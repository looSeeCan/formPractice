import React from 'react';
import {useAuth0} from "@auth0/auth0-react"; /// hook
import "../CSS/userLogInAuth.css"


const UserLogInAuth = () => {
    const {loginWithRedirect} = useAuth0() /// use the hook inside function. destructure
    console.log(useAuth0);
    console.log(loginWithRedirect);

    return (
        <div>
            <button className='userLoginAuthButton' onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    );
};


export default UserLogInAuth;
