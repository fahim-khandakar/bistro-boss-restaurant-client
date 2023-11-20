import {
  FaBook,
  FaCalendar,
  FaCartArrowDown,
  FaEnvelope,
  FaHome,
  FaList,
  FaRadiation,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [carts] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-5">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-xl"></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils className="text-xl"></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartArrowDown className="text-xl"></FaCartArrowDown>
                  My Cart ({carts.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaCartArrowDown className="text-xl"></FaCartArrowDown>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList className="text-xl"></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook className="text-xl"></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers className="text-xl"></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                <NavLink to="/dashboard/paymentHistory">
                  <FaCartArrowDown className="text-xl"></FaCartArrowDown>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList className="text-xl"></FaList>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared navLinks here  */}
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
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope className="text-xl"></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 pt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
