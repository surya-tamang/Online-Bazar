import React, { useEffect, useState } from "react";
import "./../styling/main.css";

export default function HeroPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures that this effect only runs once

    return (
        <>
            <div className={isScrolled ? "heropage scrolled" : "heropage"}>
                <nav className={isScrolled ? "bgChange" : ""}>
                    <div className="logo">
                        <h1>SaleMyDop</h1>
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
        </>
    );
}
