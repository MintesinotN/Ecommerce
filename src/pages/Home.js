import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <ul>
          <Link to="/product">
            <li>ProductList</li>
          </Link>
          <Link to="/product">
            <li>ProductList</li>
          </Link>
          <Link to="/product">
            <li>ProductList</li>
          </Link>
          <Link to="/product">
            <li>ProductList</li>
          </Link>
          <li onClick={() => navigate('/cart')}>
            Cart
          </li>
          
        </ul>
      </div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
