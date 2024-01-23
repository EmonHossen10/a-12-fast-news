import { FaHome, FaUsers } from "react-icons/fa";
import { SiAffinitypublisher } from "react-icons/si";
import { IoDocumentsSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import UseAdmin from "../Hooks/UseAdmin";

const Dashboard = () => {
  // TODO: get isAdmin value from the database
  // const isAdmin = true;
  const [isAdmin] = UseAdmin();

  return (
    <div className="flex gap-3">
      {/* Dashboard sidebar */}

      <div className="w-64 min-h-screen bg-sky-300">
        <ul className="menu">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/home">
                  <MdAdminPanelSettings className="text-xl" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUsers /> All User
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allArticle">
                  <IoDocumentsSharp></IoDocumentsSharp> All Articles
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allPublisher">
                  <SiAffinitypublisher></SiAffinitypublisher> Add Publisher
                </NavLink>
              </li>
              <div className="divider bg-black w-full h-px"></div>

              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <MdAdminPanelSettings className="text-xl" />
                  User  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* navigation content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
