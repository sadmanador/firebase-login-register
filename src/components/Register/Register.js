import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, parseActionCodeURL } from "firebase/auth";
import { app } from '../../firebase/firebase.init';

const auth = getAuth(app);

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error('error: ', error))
    }

    return (
        <div>
            <form onSubmit={handleCreateUser}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Your email' name='email'/><br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Your password' name='password'/><br />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;