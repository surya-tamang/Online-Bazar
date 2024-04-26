import React, { useState } from 'react';
import ProductSlider from './ProductSlider';
import { Accessories, Brands, Appliances, Cloth } from './images';
import { NavLink } from 'react-router-dom'


import banner1 from './../assets/banner1.jpg'
import Footer from './footer';

import "./../styling/main.css";



export default function HeroPage() {

    return (
        <>
            <div className="heropage" id="home">
                <nav>
                    <div className="logo">
                        <NavLink><h1>SaleMyDop</h1></NavLink>
                    </div>

                    <div className="searchBar">
                        <input type="search" name="search" id="searchBar" placeholder="Search..." />
                        <i id="searchBtn" className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <ul>
                        <li>
                            <NavLink exact activeClassName="active" to='/salemydop'> Home</NavLink>
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
                            <NavLink to='/salemydop/login'>Log In</NavLink>
                        </div>
                    </ul>
                </nav>
                <div className="hero">
                    <article>
                        <h2>Discover the best deals online</h2>
                        <p>Sell and Buy what you like</p>
                        <button>Get Started</button>
                    </article>
                </div>
            </div>
            <div className="container">
                <div className="categoryNav">
                    <ul>
                        <li><a href="">Accessories</a></li><span>|</span>
                        <li><a href="">Groceries</a></li><span>|</span>
                        <li><a href="">Fashion</a></li><span>|</span>
                        <li><a href="">Home appliance</a></li><span>|</span>
                        <li><a href="">Beauty</a></li><span>|</span>
                        <li><a href="">Gadgets</a></li><span>|</span>
                        <li><a href="">Sports & Outdoor</a></li>
                    </ul>
                    <div className="links">
                        <a href="">Become a seller</a>
                    </div>
                </div>

                <div className="highlighted">
                    <h3>Summer Accessories</h3>
                    <ProductSlider highlight={Accessories} />
                    <a href="">Shop more</a>
                </div>

                <div className="highlighted">
                    <h3>Top Brands</h3>
                    <ProductSlider highlight={Brands} />
                </div>

                <div className="banner">
                    <img src={banner1} alt="" />
                </div>

                <div className="highlighted">
                    <h3>Home Appliances</h3>

                    <ProductSlider highlight={Appliances} />

                    <a href="">Shop more</a>
                </div>

                <div className="clothBanner">
                    <h3>20% off in Fashion and wears</h3>
                </div>

                <div className="highlighted">
                    <h3>Fashion and wears</h3>
                    <ProductSlider highlight={Cloth} />
                    <a href="">Shop more</a>
                </div>
                <Footer />
            </div>
        </>
    );
}