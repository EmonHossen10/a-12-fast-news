import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut=()=>{
    logout()
    .then(()=>{
      Swal.fire({
              icon: "success",
              title: "Successfully added",
              text: "User Logout Successfully",
            });
    })
    .catch(error=>{console.log(error)})
  }

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

      {/* TODO: dashboard added here */}
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
          <ul className="menu menu-horizontal  mr-80 px-1">{navOptions}</ul>
        </div>
        {user ? (
          <>
          <span>{user?.displayName}</span>
          <span><img src={user?.photoURL} alt="" /></span>
            <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300 flex items-center">
              <IoLogOut className="inline-block mr-2" />
              Logout
            </button>
          </>
        ) : (
          <div>
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300 flex items-center">
                <IoLogIn className="inline-block mr-2" />
                Login
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
