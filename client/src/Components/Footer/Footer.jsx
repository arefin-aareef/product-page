import { FaHeadphonesAlt, FaHome } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import './Footer.css'
import footerImg1 from '../../assets/images/appstore.png'
import footerImg2 from '../../assets/images/googleplay.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='section1'>
                    <p className='section1-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className='hotline'>
                        <FaHeadphonesAlt />
                        <p>Hotline 24/7</p>    
                    </div>
                    <p className='number'>(+880) 9643 3009 400</p>
                    <div className='address'>
                        <FaHome /> 
                        <p>House 91/C Rd 24 <br /> Dhaka 1212 Bangladesh</p>
                    </div>
                    <div className="email">
                        <MdOutlineMailOutline />
                        <p>thinkcrypt@io</p>
                    </div>
                </div>

                <div className='section2'>
                    <h1>Useful Links</h1>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                    <p>Career</p>
                    <p>Policy</p>
                    <p>Offer</p>
                </div>

                <div className='section2'>
                    <h1>Policy</h1>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Return & Refund</p>
                    <p className='footer-selected'>Reward Redemption</p>
                </div>

                <div className='section2'>
                    <h1>Account</h1>
                    <p>Sign In</p>
                    <p>View Cart</p>
                    <p>My Wishlist</p>
                </div>

                <div className='section2'>
                    <h1>Install App</h1>
                    <p>Download Our App from App Store or <br /> Google Play Store</p>
                    <div className='footer-img'>
                        <img className='img1' src={footerImg1} alt="" />
                        <img src={footerImg2} alt="" />
                    </div>
                </div>


                <div></div>
            </div>
            <p className='copyright'>© 2023 ThinkCrypt, All Rights Reserved</p>
        </div>
    );
};

export default Footer;