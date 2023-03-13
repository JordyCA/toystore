import about from '../../assets/img/section/about.jpeg';
import pony from '../../assets/img/section/pony.png';
import './about.style.css';
const About = () => {
    return (
        <div className='__SectionAbout'>
            <div className='perfilImage'>
                <img src={about} alt="about-image" />
            </div>
            <div className='group-image'>
                <img className='pony' src={pony} alt="pony-image" />
            </div>
            <div className='group-text'>
                <div className='title'>
                    <h2>Sobre nosotros</h2>
                </div>
                <div className='text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About