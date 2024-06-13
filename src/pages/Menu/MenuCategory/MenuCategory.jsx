import MenuItem from "../../Shared/MenuItem/MenuItem";
import PageCover from "../../Shared/PageCover/PageCover";

const MenuCategory = ({ items, title, menuCoverImg, subMenu }) => {
  return (
    <div>
      {title && (
        <PageCover img={menuCoverImg} coverTitle={title} subMenu={subMenu} />
      )}
      <div className="grid md:grid-cols-2 gap-5 md:gap-10 my-14 md:my-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 flex mx-auto mb-12">
        ORDER YOUR FAVOURITE FOOD
      </button>
    </div>
  );
};

export default MenuCategory;
