import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
  const { GoogleSignIn } = useContext(AuthContext);
  const location=useLocation();
  const navigate = useNavigate();
  /// google

  const handleGoogleLogin = () => {
    GoogleSignIn()
      .then((result) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
        // send data to db
        const loggedUser = result?.user;
        console.log(loggedUser);
        const userInfo = {
          email: loggedUser?.email,
          name: loggedUser?.displayName,
          image:loggedUser?.photoURL
        };
        axios.post("https://fast-news-server.vercel.app/addUsers", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to db");
            Swal.fire({
              icon: "success",
              title: "Successfully added",
              text: "User Login Successfully by google account",
            });
          } else {
            console.log("user already existed");
          }
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          aria-label="Log in with Google"
          className="p-1 rounded-sm"
        >
          <FcGoogle className="text-3xl"></FcGoogle>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
