import { FaBars, FaSearch, FaAngleDown, FaRegHeart } from 'react-icons/fa';
import navIcon from '../../assets/images/nav-icon.png'
import avatar from '../../assets/images/avatar.png'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-info'>
                <p>Free shipping on order value more than BDT. 2000</p>
                <p>Return Plastic to Get Reward Points</p>
                <p>Get Same Day Delivery</p>
                <p>Free shipping on order value more than BDT. 2000</p>
                <p>Get Same Day Delivery</p>
                <p>Find us<span>|</span>Help<span>|</span>Contact Us</p>
            </div>

            <div className="nav-content">
                <div className='nav-part'>
                    <FaBars />
                    <img src={navIcon} alt="Nav Icon" />
                    <a href="">Home<span className='anchor-bar'>|</span></a>
                    <a href="">Offers <span className='angle-down'><FaAngleDown /></span><span className='anchor-bar'>|</span></a>
                    <a href="">BOGO <span className='angle-down'><FaAngleDown /></span> <span  className='anchor-bar'>|</span></a>
                    <a href="">Plastic free <span className='angle-down'><FaAngleDown /></span><span className='anchor-bar'>|</span></a>
                </div>

                <div className='nav-part'>
                    <div className='nav-input'>
                        <FaSearch />
                        <input type="text" placeholder='I’m searching for...'/>
                    </div>
                    <div className='fav-icon'>
                        <FaRegHeart size={24} />
                        <div className='fav-count'>4</div>
                    </div>
                    <span>|</span>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;