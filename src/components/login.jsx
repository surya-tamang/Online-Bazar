import React from 'react';
import { NavLink } from 'react-router-dom';

import "./../styling/main.css"
import NavBar from './NavBar';

export default function Login() {
    return (
        <>
            <NavBar mode="dark" user={'user'} />
            <div className="form_container flex ">
                <main>
                    <aside>
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem temporibus illo explicabo asperiores nihil incidunt excepturi debitis sunt suscipit repudiandae?</h1>
                    </aside>
                    <form action="">
                        <h1>Welcome</h1>

                        <input type="email" name="email" id="email" placeholder='Email address' />
                        <input type="password" name="pwd" id="pwd" placeholder='Enter password' />


                        <button>Log In</button>

                        <p>New to SaleMyDop? <NavLink to='/salemydop/signup'>Sign Up</NavLink></p>
                    </form>
                </main>
            </div>
        </>
    )
}