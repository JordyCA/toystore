import toyShopIcon from '../../assets/img/toyShop.png';
import './icon.style.css'

const Icon = () => {
    return (
        <div className='logo'>
            <a href="/">
                <img src={toyShopIcon} alt="toyIcon-Store" />
            </a>

        </div>
    )
}

export default Icon