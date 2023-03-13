import toyShopIcon from '../../assets/img/toyShop.png';
import { Link } from 'react-router-dom';
import './icon.style.css'

const Icon = () => {
    return (
        <div className='logo'>
            <Link to="/">
                <img src={toyShopIcon} alt="toyIcon-Store" />
            </Link>

        </div>
    )
}

export default Icon