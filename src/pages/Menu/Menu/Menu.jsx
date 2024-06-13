import { Helmet } from "react-helmet";
import PageCover from "../../Shared/PageCover/PageCover";
import menuCoverImg from "../../../assets/menu/banner3.jpg";
import sectionBannerImg1 from "../../../assets/menu/dessert-bg.jpeg";
import sectionBannerImg2 from "../../../assets/menu/pizza-bg.jpg";
import sectionBannerImg3 from "../../../assets/menu/salad-bg.jpg";
import sectionBannerImg4 from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      <PageCover
        img={menuCoverImg}
        coverTitle="Our Menu"
        subMenu="Would you like to try a dish?"
      />
      <PopularMenu />
      <PageCover
        img={sectionBannerImg1}
        coverTitle="DESSERTS"
        subMenu="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PopularMenu />
      <PageCover
        img={sectionBannerImg2}
        coverTitle="PIZZA"
        subMenu="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PopularMenu />
      <PageCover
        img={sectionBannerImg3}
        coverTitle="SALADS"
        subMenu="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <PopularMenu />
      <PageCover
        img={sectionBannerImg4}
        coverTitle="SOUPS"
        subMenu="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
      <PopularMenu />
    </div>
  );
};

export default Menu;
