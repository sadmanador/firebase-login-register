import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

const Login = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [success, SetSuccess] = useState(false);
    const [userEmail, SetUserEmail] = useState('');
    const [resetEmail, setResetEmail] = useState(false);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //signIn user
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setCurrentUser(user);
                SetSuccess(true);
                form.reset();
                console.log(user);
            })
            .catch(error => {
                setErrorMessage(error.message);
                console.error(error.message);
            })
    }

    const handleBlur = event => {
        SetUserEmail(event.target.value)
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
            setResetEmail(true);
        })
        .catch(error => errorMessage(error.message))
    }

    return (
        <div>
            {
                currentUser.uid ? <h2>Hello... <span style={{ color: "green" }}>{currentUser.email}</span></h2> : <h2>Please SignIn</h2>
            }
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required placeholder='Your Email' onBlur={handleBlur} /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required placeholder='Your Password' /><br />
                <button type='submit'>Login</button>
            </form>
            <p>Forget Password? <button onClick={handleResetPassword}>Please reset</button></p>
            <Link to='/'>Don't have an account</Link>
            {
                errorMessage ? <h3 style={{ color: 'red' }}>Error: {errorMessage}</h3> : undefined
            }
            {
                success && <h3 style={{ color: "green" }}>Successfully Loges In</h3>
            }
            {
                resetEmail && <h4>Password reset email send!!!</h4>
            }
        </div>
    );
};

export default Login;