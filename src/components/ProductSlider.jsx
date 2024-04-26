import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductSlider({ highlight }) {
    return (

        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{ clickable: true }}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, }}

            className="mySwiper"
            loop="true"
        >
            {
                highlight.map((item, index) => {
                    const { image, name, price } = item;

                    return (
                        <SwiperSlide key={index}>
                            <img src={image} alt={name} />
                            <article>
                                <h4>{name}</h4>
                                <p>{price}</p>
                            </article>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}