// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
// import Menu from '../../Menu/Menu/Menu';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle heading="From Our Menu" subHeading="Check it out" />
      <div className="grid md:grid-cols-2 gap-5 md:gap-10 mb-14 md:mb-20">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4 flex items-center mx-auto">
        View all Menu
      </button>
    </section>
  );
};

export default PopularMenu;
