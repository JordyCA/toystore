import boxImage from '../../assets/img/section/toybox.png'

import './toycard.style.css';

const Toycard = ({ packName }) => {
    return (
        <div className='__ToyCard'>
            <img src={boxImage} alt="toy-box-image" />
            <div className='title'>
                <span>{packName}</span>
            </div>
            <div className='text'>
                <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
            </div>
            <div className='button'>
                <a href="/">Ver el paquete</a>
            </div>
        </div>
    );
}

export default Toycard