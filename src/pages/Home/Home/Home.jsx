import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import FoodsCategories from "../FoodsCategories/FoodsCategories";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Banner />
      <FoodsCategories />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
