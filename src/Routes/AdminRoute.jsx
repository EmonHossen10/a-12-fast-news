/* eslint-disable react/prop-types */
import { useContext } from "react";
import UseAdmin from "../Hooks/UseAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import img from "./loading.json";
import Lottie from "react-lottie";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: img, // Lottie animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  if (loading || isAdminLoading) {
    return (
      <div className="w-6/12 mx-auto mb-5">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={location.pathname}></Navigate>;
};

export default AdminRoute;
