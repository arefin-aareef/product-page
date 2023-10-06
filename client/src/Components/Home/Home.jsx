import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Info></Info>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;