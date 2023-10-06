import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;