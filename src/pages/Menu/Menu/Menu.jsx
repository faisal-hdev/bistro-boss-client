import { Helmet } from "react-helmet";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import PageCover from "../../Shared/PageCover/PageCover";
import SectionTitle from "../../../components/SectionTitle";
import menuCoverImg from "../../../assets/menu/banner3.jpg";
import sectionBannerImg4 from "../../../assets/menu/soup-bg.jpg";
import sectionBannerImg2 from "../../../assets/menu/pizza-bg.jpg";
import sectionBannerImg3 from "../../../assets/menu/salad-bg.jpg";
import sectionBannerImg1 from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="">
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      <PageCover
        img={menuCoverImg}
        coverTitle="Our Menu"
        subMenu="Would you like to try a dish?"
      />
      {/* Main Cover */}
      <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      {/* Offered menu items  */}
      <MenuCategory items={offered} />
      {/* desert menu item */}
      <MenuCategory
        menuCoverImg={sectionBannerImg1}
        items={dessert}
        title="dessert"
        subMenu={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* Pizza */}
      <MenuCategory
        menuCoverImg={sectionBannerImg2}
        items={pizza}
        title="pizza"
        subMenu={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* soup */}
      <MenuCategory
        menuCoverImg={sectionBannerImg4}
        items={soup}
        title={"Soup"}
        subMenu={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* Salad */}
      <MenuCategory
        menuCoverImg={sectionBannerImg3}
        items={salad}
        title={"Salad"}
        subMenu={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </div>
  );
};

export default Menu;
