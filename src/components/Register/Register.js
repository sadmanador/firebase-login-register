import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Register = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        //validation password with regex
        if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage('The password must contain at least one Uppercase Character');
            return;
        }
        if (password.length < 6) {
            setErrorMessage('The password should be at least 6 Characters long');
            return;
        }

        //creating user with email&password
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                form.reset();
                verifyEmail();
                updateUserInfo(username);
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error)
                setErrorMessage(error.message);
            })


        //email verification
        const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    notify();
                })
        }

        const updateUserInfo = (username) => {
            updateProfile(auth.currentUser , {
                displayName: username
            })
            .then(()=> {
                console.log('User profile updated')
            })
            .catch(error => {
                setErrorMessage(error.message)
                console.error(error);
            })
        }

        //toast
        const notify = () => {
            toast('Email Verification send to you email')
        }
    }

    return (
        <div>
            {
                user.uid ? <h2>Welcome <span style={{ color: 'green' }}>{user.email}</span></h2> : <h2>Please Register</h2>
            }
            <form onSubmit={handleCreateUser}>
                <label htmlFor="username">User Name</label>
                <input type="text" placeholder='Your User Name' name='username' required /><br />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Your email' name='email' required /><br />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Your password' name='password' required /><br />
                <button type='submit'>Register</button>
            </form>
            {
                errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p>
                    :
                    undefined
            }
            <Link to='/login'>Already have an account</Link>
            <ToastContainer />
        </div>
    );
};

export default Register;