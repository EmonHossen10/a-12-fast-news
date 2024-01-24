import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "react-lottie";
import img from "../Routes/loading.json";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return (
      <div>
        <Navbar></Navbar>

        <div className="flex justify-center items-center h-screen">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={user.photoURL} alt="Shoes" className="w-full " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-serif "> Name: {user.displayName}</h2>
              <p className="  font-serif  font-semibold ">Email:  {user.email}</p>
              <Link to="/"> <p className="btn btn-link"> <IoHome></IoHome> Home</p></Link>
              <div className="card-actions pt-5">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: img, // Lottie animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  if (loading) {
    return (
      <div className="w-6/12 mx-auto mb-5">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
};

export default MyProfile;
