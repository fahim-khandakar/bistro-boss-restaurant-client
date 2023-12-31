import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/pizza">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>

      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">
            <button className="btn btn-xs bg-transparent hover:bg-neutral text-white  border-none ">
              <FaCartArrowDown className="text-xl"></FaCartArrowDown>
              <div className="badge badge-secondary">+{carts.length}</div>
            </button>
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">
            <button className="btn btn-xs bg-transparent hover:bg-neutral text-white  border-none ">
              <FaCartArrowDown className="text-xl"></FaCartArrowDown>
              <div className="badge badge-secondary">+{carts.length}</div>
            </button>
          </NavLink>
        </li>
      )}

      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 items-center  bg-opacity-30 max-w-6xl bg-black  text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn p-0 btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost p-0 normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost">GET STARTED</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
