import React from 'react'
import "./../styling/main.css";
import esewa from "./../assets/payImg/esewa.png"
import khalti from "./../assets/payImg/khalti.jpeg"
import visa from "./../assets/payImg/visa.jpeg"
export default function Footer() {
    return (
        <>
            <footer>
                <div className="additional-info">
                    <div className="info">
                        <h4>Information</h4>
                        <li><a href="">About us</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Delivery coverage</a></li>
                    </div>
                    <div className="info">
                        <h4>Policies</h4>
                        <li><a href="">Data & security policy</a></li>
                        <li><a href="">Product image policy</a></li>
                        <li><a href="">Provacy policy</a></li>
                        <li><a href="">Terms and condition</a></li>
                    </div>
                    <div className="info contact">
                        <h4>Contact</h4>
                        <li><a href=""><i className="fa-solid fa-phone"></i><span>01-4562455</span></a></li>
                        <li><a href=""><i className="fa-solid fa-envelope"></i><span>salymydop@contact.com</span></a></li>
                        <li><a href=""><i className="fa-solid fa-location-dot"></i><span>Chabahil, Kathmandu</span></a></li>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright &copyright 2024  | All rights reserved | SalyMyDop</p>
                    <div className="imgs">
                        <a href=""><img src={esewa} alt="esewa logo" /></a>
                        <a href=""> <img src={khalti} alt="khalti logo" /></a>
                        <a href=""><img src={visa} alt="visa logo" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}