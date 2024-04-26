import React, { useState } from 'react';
import ProductSlider from './ProductSlider';
import { Accessories, Brands, Appliances, Cloth } from './images';


import banner1 from './../assets/banner1.jpg'
import Footer from './footer';

import "./../styling/main.css";



export default function HeroPage() {

    const [accessories, setAccessories] = useState(Accessories);
    const [brands, setBrands] = useState(Brands);
    const [appliance, setAppliance] = useState(Appliances);
    const [cloths, setCloth] = useState(Cloth);


    return (
        <>
            <div className="heropage" id="home">
                <nav>
                    <div className="logo">
                        <a href="#home"><h1>SaleMyDop</h1></a>
                    </div>

                    <div className="searchBar">
                        <input type="search" name="search" id="searchBar" placeholder="Search..." />
                        <i id="searchBtn" className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <ul>
                        <li>
                            <a href="#" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">Categories</a>
                            <ul className="dropdown_list">
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Groceries</a></li>
                                <li><a href="">Fashion</a></li>
                                <li><a href="">Home appliance</a></li>
                                <li><a href="">Beauty</a></li>
                                <li><a href="">Gadgets</a></li>
                                <li><a href="">Sports & Outdoor</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>

                        <button>Log In</button>
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
                    <ProductSlider highlight={accessories} />
                    <a href="">Shop more</a>
                </div>

                <div className="highlighted">
                    <h3>Top Brands</h3>
                    <ProductSlider highlight={brands} />
                </div>

                <div className="banner">
                    <img src={banner1} alt="" />
                </div>

                <div className="highlighted">
                    <h3>Home Appliances</h3>

                    <ProductSlider highlight={appliance} />

                    <a href="">Shop more</a>
                </div>

                <div className="clothBanner">
                    <h3>20% off in Fashion and wears</h3>
                </div>

                <div className="highlighted">
                    <h3>Fashion and wears</h3>
                    <ProductSlider highlight={cloths} />
                    <a href="">Shop more</a>
                </div>
                <Footer />
            </div>
        </>
    );
}
