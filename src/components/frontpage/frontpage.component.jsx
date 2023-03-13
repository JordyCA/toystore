import { Fragment } from 'react';

import toyStoreBanner from './../../assets/img/section/toystorebanner.webp'
import hotwheels from '../../assets/img/companies/hotwheels.png';
import mylittlepony from '../../assets/img/companies/mylittlepony.png';
import starwarslogo from '../../assets/img/companies/starwarslogo.png';

import './frontpage.style.css'

const Frontpage = () => {
    return (
        <Fragment>
            <div className="__SectionOne">
                <div className='group-text'>
                    <div className='title'>
                        <span>Todo puede entrar en una sola caja</span>
                    </div>
                    <div className='text-1'>
                        <span>Disfruta, crea y aprende, explora con tu creatividad, arma tu paquete de juguetes.</span>
                    </div>
                    <div className='button'>
                        <a href="/">Descubre nuestros paquetes</a>
                    </div>
                    <div className='text-2'>
                        <span>Pagos 100% seguros</span>
                    </div>
                </div>
                <img src={toyStoreBanner} alt="toy-store" />
            </div>
            <div className='__SectionCompanies'>
                <h2>Marcas</h2>
                <div className='group-images'>
                    <a href="https://shop.mattel.com/es-mx/pages/hot-wheels" target="_blank">
                        <img className='hotwheels' src={hotwheels} alt="hotwheels" />
                    </a>
                    <a href="https://mylittlepony.hasbro.com/es-mx" target="_blank">
                        <img className='mylittlepony' src={mylittlepony} alt="mylittlepony" />
                    </a>
                    <a href="https://www.starwars.com/" target="_blank">
                        <img className='starwars' src={starwarslogo} alt="starwars" />
                    </a>


                </div>
            </div>

        </Fragment>

    )
}

export default Frontpage;