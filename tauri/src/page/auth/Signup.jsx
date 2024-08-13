import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Signup.css'

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-header">
                    <h1>Sign Up</h1>
                </div>

                <div className="signup-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>

                <div className="signup-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>

                <div className="signup-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <div className="signup-field">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" />
                </div>

                <button className="signup-button">Sign Up</button>

                <div className="signup-footer">
                    <p className="mb-0 text-muted">
                        Already have an account?{' '}
                        <Link to="/">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
