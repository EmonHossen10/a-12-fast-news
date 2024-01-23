import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import Swal from "sweetalert2";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully added",
          text: "User Logout Successfully",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  font-semibold   text-orange-500 underline   "
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  font-semibold   text-orange-500 underline   "
              : ""
          }
          to="/addArticle"
        >
          Add Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  font-semibold   text-orange-500 underline   "
              : ""
          }
          to="/allArticle"
        >
          All Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  font-semibold   text-orange-500 underline   "
              : ""
          }
          to="/subscription"
        >
          Subscription
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  font-semibold text-orange-500 underline   "
              : ""
          }
          to="/myArticle"
        >
          My Articles
        </NavLink>
      </li>

      {/* TODO: dashboard added here */}
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "   font-bold   text-sky-500 underline   "
              : ""
          }
          to="/dashboard/home"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav className="navbar     z-10  bg-slate-500   text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              {navOptions}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  mr-80 px-1">
           { navOptions }  
          </ul>
        </div>

        {/* login logout */}
        <div>
          {user ? (
            <>
              <div className={`relative inline-block ${isOpen ? "group" : ""}`}>
                <div
                  tabIndex={0}
                  role="button"
                  className="w-16 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={toggleDropdown}
                >
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } absolute right-0 mt-2 w-52 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none`}
                >
                  <div className="py-1">
                    <span className="block px-4 py-2 text-sm text-gray-700">
                      <MdDriveFileRenameOutline className="inline" />{" "}
                      {user?.displayName}
                    </span>
                    <span className="block px-4 py-2 text-sm text-gray-700">
                      <MdEmail className="inline" /> {user?.email}
                    </span>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={handleLogOut}
                      className="block w-full px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                      <IoLogOut className="inline-block mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex gap-3">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300 flex items-center">
                  <IoLogIn className="inline-block mr-2" />
                  Login
                </button>
              </Link>
              <Link to="/registration">
                <button className="bg-orange-500 hover:bg-orange-600   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300 flex items-center">
                  <IoLogIn className="inline-block mr-2" />
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
