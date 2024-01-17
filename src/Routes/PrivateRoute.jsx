/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import img from './loading.json'
import Lottie from "react-lottie";
 

 

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
  console.log(location.pathname);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: img, // Lottie animation file
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    if(loading){
        return (<div className="w-6/12 mx-auto mb-5">
        <Lottie options={defaultOptions} />
      </div>)
    }
    if(user){
        return children;
    }
    return  <Navigate to='/login' state={location.pathname}  ></Navigate>
};

export default PrivateRoute;