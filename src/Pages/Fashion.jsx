 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';import { EffectCoverflow, Pagination } from 'swiper/modules';
import SectionTitle from '../Hooks/SectionTitle';

const Fashion = () => {
    return (
        <div>
            <SectionTitle heading="top model"></SectionTitle>

            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-[500px] h-[400px]   '  src="https://i.ibb.co/CBSmqrG/pexels-photo-837358.jpg" />
          <p className='text-2xl font-semibold '>Mark</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[500px] h-[400px]   ' src="https://i.ibb.co/RjDMtmR/pexels-photo-1043474.jpg" />
          <p className='text-2xl font-semibold '>Jack</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[500px] h-[400px] ' src="https://i.ibb.co/xCn8tKm/pexels-photo-1121796.jpg" />
          <p className='text-2xl font-semibold '>Rock</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[500px] h-[400px] ' src="https://i.ibb.co/Z2BkgsN/pexels-photo-775358.jpg" />
          <p className='text-2xl font-semibold '>Lock</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[500px] h-[400px] ' src="https://i.ibb.co/R7D9YYs/pexels-photo-845434.jpg" />
          <p className='text-2xl font-semibold '>Tom</p>
        </SwiperSlide>
         
      </Swiper>
        </div>
    );
};

export default Fashion;