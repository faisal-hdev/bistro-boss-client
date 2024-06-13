// import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card w96 bg-base-100 shadow-xl">
      <figure className="px10 pt10 p-2">
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <p className="absolute right-0 bg-gray-700 px-2 mr-5 mt-5 text-white rounded-md">
        $ {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary uppercase">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
