import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, parseActionCodeURL } from "firebase/auth";
import { app } from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Register = () => {
    const [currentUser, setCurrentUser] = useState({});
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
                setCurrentUser(user);
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error)
                setErrorMessage(error);
            })
        form.reset();
    }

    return (
        <div>
            {
                currentUser.uid ? <h2>Welcome <span style={{color: 'red'}}>{currentUser.email}</span></h2> : <h2>Please Register</h2>
            }
            <form onSubmit={handleCreateUser}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Your email' name='email' required/><br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Your password' name='password' required/><br />
                <button type='submit'>Register</button>
            </form>
            {
                errorMessage ? <p><small>errorMessage</small></p>
                    :
                    undefined
            }
            <Link to='/login'>Already have an account</Link>
        </div>
    );
};

export default Register;