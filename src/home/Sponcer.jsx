import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';

// Import images
import sponsor01 from '../../public/images/sponsor/01.png';
import sponsor02 from '../../public/images/sponsor/02.png';
import sponsor03 from '../../public/images/sponsor/03.png';
import sponsor04 from '../../public/images/sponsor/04.png';
import sponsor05 from '../../public/images/sponsor/05.png';
import sponsor06 from '../../public/images/sponsor/06.png';

const sponsorList = [
  {
    imgUrl: sponsor01,
  },
  {
    imgUrl: sponsor02,
  },
  {
    imgUrl: sponsor03,
  },
  {
    imgUrl: sponsor04,
  },
  {
    imgUrl: sponsor05,
  },
  {
    imgUrl: sponsor06,
  },
];

const Sponcer = () => {
  return (
    <div className='sponsor-section section-bg'>
      <div className="container">
        <div className="section-wrapper">
          <div className="sponser-slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {
                sponsorList.map((val, i) => (
                  <SwiperSlide key={i}>
                    <div className="sponsor-iten">
                      <div className="sponsor-thumb">
                        <img src={val.imgUrl} alt={`Sponsor ${i + 1}`} /> 
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponcer;
