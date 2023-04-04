import toyStoreBanner from './../../assets/img/home/banner/banner.webp'

import './banner.style.css';
const Banner = () => {
    return (
        <div className="__SectionBanner">
            <div className='group-text'>
                <div className='title'>
                    <span>No lo pienses más, arma tu paquete de juguetes.</span>
                </div>
                <div className='text-1'>
                    <span>Descubre nuevas formas de crear, aprender y divertirte.</span>
                </div>
                <div className='button'>
                    <a href="/">Crea tu paquete</a>
                </div>
                <div className='text-2'>
                    <span>Pagos 100% seguros</span>
                </div>
            </div>
            <img src={toyStoreBanner} alt="toy-store" />
        </div>
    );
}

export default Banner;