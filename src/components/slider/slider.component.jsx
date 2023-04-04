// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image1 from '../../assets/img/home/slider/child-bear-new.webp';
import Image2 from '../../assets/img/home/slider/child-playing-new.webp';
import Image3 from '../../assets/img/home/slider/girls-mylittlepony-new.webp';
import Image4 from '../../assets/img/home/slider/toy1.webp';
import Image5 from '../../assets/img/home/slider/toy2.webp';
import Image6 from '../../assets/img/home/slider/toy3.webp';

// import required modules
import { Pagination, Navigation } from "swiper";

import './slider.style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderToy = () => {
    return (
        <div className='slider-group'>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className='image'><img src={Image1} className='imageslider ' /></div></SwiperSlide>
                <SwiperSlide><div className='image'><img src={Image2} className='imageslider' /></div></SwiperSlide>
                <SwiperSlide><div className='image'><img src={Image3} className='imageslider' /></div></SwiperSlide>
                <SwiperSlide><div className='image'><img src={Image4} className='imageslider' /></div></SwiperSlide>
                <SwiperSlide><div className='image'><img src={Image5} className='imageslider' /></div></SwiperSlide>
                <SwiperSlide><div className='image'><img src={Image6} className='imageslider' /></div></SwiperSlide>
            </Swiper >
        </div>

    )
}

export default SliderToy;