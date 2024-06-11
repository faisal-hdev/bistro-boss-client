const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-5">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="md:w-[120px] w-[80px] md:h-[120px] h-[80px] object-cover"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} --------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
