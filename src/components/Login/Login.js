import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

const Login = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setCurrentUser(user);
        })
        .catch(error =>{
            setErrorMessage(error);
            console.error('Error: ', error);
        })
    }

    return (
        <div>
            {
                currentUser.uid ? <h2>Hello... <span style={{color: "green"}}>{currentUser.email}</span></h2> : <h2>Please SignIn</h2>
            }
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required placeholder='Your Email' /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required placeholder='Your Password' /><br />
                <button type='submit'>Login</button>
            </form>
            <Link to='/'>Don't have an account</Link>
            {
                errorMessage? <p>Error: {errorMessage}</p> : undefined
            }
        </div>
    );
};

export default Login;