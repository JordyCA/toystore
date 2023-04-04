import toyShopLogo from '../../assets/img/logo/logo.webp';
import { Link } from 'react-router-dom';
import './logo.style.css'

const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">
                <img src={toyShopLogo} className="image" alt="toyLogo-Store" />
            </Link>

        </div>
    )
}

export default Logo;