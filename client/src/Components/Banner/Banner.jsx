import { FaAngleRight, FaPlus, FaRegHeart, FaShareAlt, FaShoppingCart } from 'react-icons/fa';
import './Banner.css'
import bannerImg from '../../assets/images/bannerImg.png'
import imageObj from '../../assets/images/imageObj.png'
import imageObj2 from '../../assets/images/imageObj2.png'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'

const Banner = () => {

    const items = [
        {
            name : "Qdol Pokemon Limited Edition Soda",
            weight: "250 gm",
            price: "144",
            image: img1
        },
        {
            name : "Qdol Pokemon Limited Edition Soda",
            weight: "300 gm",
            price: "194",
            image: img2
        },
        {
            name : "Qdol Pokemon Limited Edition Soda",
            weight: "350 gm",
            price: "244",
            image: img3
        }
    ]
    return (
        <div className='banner'>
            <div  className='banner-nav'>
                <p> Home <FaAngleRight />  Products <FaAngleRight /> Chicken <FaAngleRight />
                 <span> Broiler Chicken Drumsticks <span className='special-element'>&#40;</span>± 50gm<span className='special-element'>&#41;</span> 1kg</span>
                </p>
            </div>

            <div className='banner-content'>
                <div className='banner-img'>
                    <img src={bannerImg} alt="" />
                    <div className='banner-img-obj'><img src={imageObj} alt="" /></div>
                    <div className='banner-img-obj2'><img src={imageObj2} alt="" /></div>
                </div>
                <div className='banner-details'>
                    <h1 className='banner-details-header'>Broiler Chicken <br /> Drumsticks <span className='special-element'>(</span>± 50gm<span className='special-element'>)</span> 1kg</h1>
                    <p className='banner-details-tag'>80G PLASTIC</p>
                    <p className='banner-details-price'>৳ 130.00 <span>৳ 150.00</span> </p>
                    <table className='banner-details-table'>
                        <tr>
                            <td className='table-column'>Stock</td>
                            <td className='table-row-1'>In Stock</td>
                        </tr>
                        <tr>
                            <td className='table-column'>SKU</td>
                            <td className='table-row-2'>B42312</td>
                        </tr>
                        <tr>
                            <td className='table-column'>Categories</td>
                            <td className='table-row-3'><span>CLEANING SUPPLIES</span><span>FLOOR & GLASS CLEANERS</span> <br /><span>OFFER</span><span>BOGO</span></td>
                        </tr>
                    </table>
                    <p className='banner-info'>Achieve a sparkling clean and hugenic toilet with Shakti Toilet Cleaner.</p>
                    <div className='banner-btn'>
                        <button className='btn-1'> <span><FaShoppingCart /></span> Add To Cart</button>
                        <button className='btn-2'><FaRegHeart /></button>
                        <button  className='btn-2'><FaShareAlt /></button>
                    </div>
                </div>
                <div className='related-items'>
                    <p className='related-items-header'>Related Items</p>
                    <div className='item-container'>
                        {
                            items.map((item, index) => 
                            <div key={index} className="item-card">
                                <div className='left-part'>
                                    <img className='item-img' src={item.image} alt="" />
                                    <div className='item-detail'>
                                        <p className='item-title'>{item.name}</p>
                                        <p className='item-weight'>{item.weight}</p>
                                        <p className='item-price'>BDT. {item.price}</p>
                                    </div>
                                </div>
                                <div><button  className='item-btn'><FaPlus /></button></div>
                            </div> )
                        }

                    </div>
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;