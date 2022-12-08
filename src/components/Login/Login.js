import React from 'react';

const Login = () => {

    const handleLogin = event = {
        event.preventDefault();
        
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required placeholder='Your Email.com' /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required placeholder='Your Password' /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;