import { Fragment } from 'react';

import SliderToy  from '../slider/slider.component';

import About from "../../components/about/about.component";
import Packages from "../../components/packages/packages.component";
import Infoform from "../../components/infoform/infoform.component";
import Banner from '../banner/banner.component';

import hotwheels from '../../assets/img/companies/hotwheels.png';
import mylittlepony from '../../assets/img/companies/mylittlepony.png';
import starwarslogo from '../../assets/img/companies/starwarslogo.png';

import './frontpage.style.css'

const Frontpage = () => {
    return (
        <div className='__SectionFrontPage'>
            <Banner />
            <SliderToy/>
            
            {/* <div className='__SectionCompanies'>
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
            </div> */}
            <Packages />
            <About />
            <Infoform />
        </div>

    )
}

export default Frontpage;