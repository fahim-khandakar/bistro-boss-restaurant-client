import {
  FaCalendar,
  FaCartArrowDown,
  FaHome,
  FaList,
  FaRadiation,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [carts] = useCart();
  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-5">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome className="text-xl"></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar className="text-xl"></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartArrowDown className="text-xl"></FaCartArrowDown>
              My Cart ({carts.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaRadiation className="text-xl"></FaRadiation>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList className="text-xl"></FaList>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome className="text-xl"></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/pizza">
              <FaList className="text-xl"></FaList>
              Order Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 pt-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
