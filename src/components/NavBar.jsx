import React from 'react'
import './../styling/main.css'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <>
            <nav className={`bg-${props.mode}`}>
                <div className="logo">
                    <NavLink><h1>SaleMyDop</h1></NavLink>
                </div>

                <div className="searchBar">
                    <input type="search" name="search" id="searchBar" placeholder="Search..." />
                    <i id="searchBtn" className="fa-solid fa-magnifying-glass"></i>
                </div>

                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to='/salemydop/'> Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to='/salemydop/about'>About us</NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink exact activeClassName="active" to='/salemydop/cat'>Categories</NavLink>
                        <ul className="dropdown_list">
                            <li><NavLink to='/salymydop'>Accessories</NavLink></li>
                            <li><NavLink to='/salymydop'>Groceries</NavLink></li>
                            <li><NavLink to='/salymydop'>Fashion</NavLink></li>
                            <li><NavLink to='/salymydop'>Home appliance</NavLink></li>
                            <li><NavLink to='/salymydop'>Beauty</NavLink></li>
                            <li><NavLink to='/salymydop'>Gadgets</NavLink></li>
                            <li><NavLink to='/salymydop'>Sports & Outdoor</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to='/salemydop/faqs'>FAQs</NavLink>
                    </li>

                    <div className="loginBtn">
                        <NavLink to='/salemydop/login'>{props.user}</NavLink>
                    </div>
                </ul>
            </nav>
        </>
    )
}