import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { HiShoppingCart } from "react-icons/hi";
import useCart from "../../../hooks/useCart";
import UseAdmin from "../../../hooks/UseAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = UseAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/orderFood/salad">Order Foods</Link>
      </li>
      {
        // user? 'true':'false'
        // user ? condition ? 'double true' : 'one true' : 'false'
      }
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Order Foods</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Order Foods</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <HiShoppingCart className="mr-2 w-5 h-5" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut} to="/login">
              Log out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-black text-white mx-auto  md:px-[100px] fixed z-20 bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boos</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  justifycenter items-center ">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <img
            className="w-10 h-10 rounded-full mr-4 border-blue-400 border-3 object-cover border-2"
            src={user?.photoURL}
            alt=""
          />
          <p className="font-semibold">{user?.displayName}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
