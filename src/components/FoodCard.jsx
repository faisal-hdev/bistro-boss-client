import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // alert();
      // TODO : Sand cart item to the database
      console.log("hello", food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Yor are not logged in",
        text: "Please login add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4 flex items-center mx-auto"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
