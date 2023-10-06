import { FaAngleLeft, FaAngleRight, FaPlus } from 'react-icons/fa';
import './Products.css'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'

const Products = () => {
    const products = [
        {
            name: "Guava Fruit Fresh",
            stock: "IN STOCK",
            weight: "1kg",
            price: "220",
            prevPrice: "300",
            discount: "10% OFF",
            type: "PLASTIC FREE",
            image: img2
        },
        {
            name: "Guava Fruit Fresh",
            stock: "IN STOCK",
            weight: "1kg",
            price: "320",
            prevPrice: "400",
            discount: "10% OFF",
            type: "PLASTIC FREE",
            image: img3
        },
        {
            name: "Guava Fruit Fresh",
            stock: "IN STOCK",
            weight: "1kg",
            price: "300",
            prevPrice: "420",
            discount: "15% OFF",
            type: "PLASTIC FREE",
            image: img4
        },
        {
            name: "Guava Fruit Fresh",
            stock: "IN STOCK",
            weight: "1kg",
            price: "250",
            prevPrice: "500",
            discount: "50% OFF",
            type: "80G PLASTIC",
            image: img5
        },
        {
            name: "Guava Fruit Fresh",
            stock: "IN STOCK",
            weight: "1kg",
            price: "120",
            prevPrice: "170",
            discount: "5% OFF",
            type: "PLASTIC FREE",
            image: img6
        },
    ]
    return (
        <div className="products">
            <div className='product-header'>
                <p className='product-title'>Related Products</p>
                <button className='btn-left'><FaAngleLeft /></button>
                <button className='btn-right'><FaAngleRight /></button>
            </div>

            <div className='product-container'>
                {
                    products.map((product, index) => 
                    <div key={index} className='product-card'>
                        <button className='product-btn'><FaPlus /></button>
                        <div className='image'><img  src={product.image} alt="" /></div>
                        <div className="type"><p>{product.type}</p></div>
                        <p className="stock">{product.stock}</p>
                        <p className="title">{product.name}</p>
                        <p className="discount">{product.discount}</p>
                        <p className="weight">{product.weight}</p>
                        <p className="price">৳ {product.price} <span>৳ {product.prevPrice}</span> </p>
                    </div>
                    )
                }
                

            </div>
        </div>
    );
};

export default Products;