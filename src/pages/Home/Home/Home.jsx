import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import FoodsCategories from "../FoodsCategories/FoodsCategories";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodsCategories />
      <PopularMenu />
      <Featured />
    </div>
  );
};

export default Home;
