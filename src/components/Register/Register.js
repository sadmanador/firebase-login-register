import React from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../../firebase/firebase.init';

const auth = getAuth(app);

const Register = () => {
    return (
        <div>
            <h1>This is register page</h1>
        </div>
    );
};

export default Register;