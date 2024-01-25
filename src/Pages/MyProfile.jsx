import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
// import Lottie from "react-lottie";
// import img from "../Routes/loading.json";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const MyProfile = () => {
  const { user } = useContext(AuthContext);

  // Using tanstack query
  // // eslint-disable-next-line no-unused-vars
  const { data = [] } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/personalUsers");
      // console.log(res.data?.[0].email, "data");
      return res.data;
    },
  });
  const result = data?.find((item) => item?.email == user?.email);
  console.log(result);
  // here data coming
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <h2 className="text-2xl font-serif text-center font-bold mt-5">
          Profile
        </h2>

        <div className="flex justify-center items-center h-screen">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <div className="avatar">
                <div className="w-36 rounded-full">
                  <img src={result?.image} />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-serif ">
                Name: {result?.name}
              </h2>
              <p className="  font-serif  font-semibold ">
                Email: {result?.email}
              </p>
              <Link to="/">
                <p className="btn btn-link">
                  <IoHome></IoHome> Home
                </p>
              </Link>
              <div className="card-actions pt-5">
                <Link to={`/myProfile/updateProfile/${result?._id}`} >
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyProfile;
