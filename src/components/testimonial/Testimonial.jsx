import React from 'react'
import cli from '../../assets/my_rMVfbyl.jpg'
import './testimonial.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={cli} />
          </div>
          <h5 className="client__name">Shahul</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt earum laudantium id cumque incidunt, quis vitae?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={cli} />
          </div>
          <h5 className="client__name">Shahul</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt earum laudantium id cumque incidunt, quis vitae?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={cli} />
          </div>
          <h5 className="client__name">Shahul</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt earum laudantium id cumque incidunt, quis vitae?
          </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonial
