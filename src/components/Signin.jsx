import React from 'react';
import { NavLink } from 'react-router-dom';

import "./../styling/main.css"
import NavBar from './NavBar';

export default function SignIn() {
    return (
        <>
            <NavBar mode="dark" user={'user'} />
            <div className="form_container flex ">
                <main>
                    <aside>
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem temporibus illo explicabo asperiores nihil incidunt excepturi debitis sunt suscipit repudiandae?</h1>
                    </aside>
                    <form action="">
                        <h1>Register</h1>

                        <input type="text" name="name" id="name" placeholder='Full name' />
                        <input type="email" name="email" id="email" placeholder='Email address' />
                        <input type="password" name="pwd" id="pwd" placeholder='Enter password' />
                        <input type="password" name="re-pwd" id="re-pwd" placeholder='Re-enter password' />



                        <button>Sign Up</button>

                        <p>Already hava an account? <NavLink to='/salemydop/login'>Log In</NavLink></p>
                    </form>
                </main>
            </div>
        </>
    )
}