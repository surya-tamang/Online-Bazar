import React from "react";
import './../styling/main.css';

export default function CategoryHighlightPage() {
    return (
        <>
           <div className="container">
            <div className="categoryNav">
                <ul>
                    <li><a href="">Accessories</a></li>
                    <li><a href="">Groceries</a></li>
                    <li><a href="">Fashion</a></li>
                    <li><a href="">Home appliance</a></li>
                    <li><a href="">Beauty</a></li>
                    <li><a href="">Gadgets</a></li>
                    <li><a href="">Sports & Outdoor</a></li>
                </ul>
            </div>
           </div>
        </>
    )
}