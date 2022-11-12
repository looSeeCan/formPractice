import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const Profile = () => {
    const {user} = useAuth0();
    console.log(user);

    return (
        <div>
            {JSON.stringify(user, null, 2)}
        </div>
    );
}

export default Profile;
