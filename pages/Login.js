import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom'


function Login(props) {

    const [email, setEmail] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Registration Submitted`)

    }


    return (
        <>
            <div className="split left">
                <div className="centered">
                    <h1>Welcome to CodigoTech!</h1>
                </div>
            </div>


            <div className="split right login">
                    <div className="centered">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className='login-container'>
                                <h4>Email</h4>
                                <label >
                                    <input placeholder="Enter your email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </label>

                                <label>
                                    <h4>Password</h4>
                                    <input placeholder="Enter your password" type="password" />
                                </label>
                                <br />
                                <br /> 
                                <Link to='./Home.js'>
                                    <input type="submit" value="Submit" />
                                </Link> 
                            </div>
                        </form>
                    </div>
            </div>

        </>
    )
}

export default Login;
