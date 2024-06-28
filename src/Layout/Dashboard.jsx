// import React from "react";
import {
  FaAddressCard,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import { FaBookAtlas, FaPeopleGroup, FaShop } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO : get isAdmin value form the database
  const isAdmin = true;

  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="min-h-screen w-72 bg-orange-300">
        <ul className="menu font-medium text-black">
          {isAdmin ? (
            <>
              <li className="p-2">
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="font-bold text-lg" />
                  Admin Home
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils className="font-bold text-lg" />
                  Add Items
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/manageItems">
                  <FaList className="font-bold text-lg" />
                  Manage Items
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/manageBookings">
                  <FaBookAtlas className="font-bold text-lg" />
                  Manage Bookings
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/allUsers">
                  <FaPeopleGroup className="font-bold text-lg" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="p-2">
                <NavLink to="/dashboard/home">
                  <FaHome className="font-bold text-lg" />
                  User Home
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/reservation">
                  <FaCalendar className="font-bold text-lg" />
                  Reservation
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart className="font-bold text-lg" />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/review">
                  <FaAddressCard className="font-bold text-lg" />
                  Add Review
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/dashboard/bookings">
                  <FaList className="font-bold text-lg" />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider">OR</div>
          <li className="p-2">
            <NavLink to="/">
              <FaHome className="font-bold text-lg" />
              Home
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/orderFood/salad">
              <MdRestaurantMenu className="font-bold text-lg" />
              Our Foods
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/menu">
              <FaShop className="font-bold text-lg" />
              Menu
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/orderFood/contact">
              <FaEnvelope className="font-bold text-lg" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
