import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import "./../styling/main.css";
import earRing from './../assets/earRing.jpg'
import lotus from './../assets/lotus.png'


export default function HeroPage() {


    return (
        <>
            <div className="heropage" id="home">
                <nav>
                    <div className="logo">
                        <a href="#home"><h1>SaleMyDop</h1></a>
                    </div>

                    <div className="searchBar">
                        <input type="search" name="search" id="searchBar" placeholder="Search..." />
                        <i id="searchBtn" class="fa-solid fa-magnifying-glass"></i>
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
                </div>

                <div className="highlighted">
                    <h3>Summer Accessories</h3>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

                        className="mySwiper"
                        loop="true"
                    >
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={earRing} alt="ear ring" />
                            <article>
                                <h4>Ear ring _ pure handmade</h4>
                                <p>Rs 150</p>
                            </article>
                        </SwiperSlide>
                    </Swiper>

                    <a href="">Shop more</a>
                </div>

                <div className="highlighted">
                    <h3>Top Brands</h3>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

                        className="mySwiper"
                        loop="true"
                    >
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={lotus} alt="ear ring" />
                            <article>
                                <h4>Lotus</h4>
                            </article>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </>
    );
}
