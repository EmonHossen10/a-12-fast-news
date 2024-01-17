import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import Lottie from "react-lottie";
import signUp from "./signup.json";

const Registration = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signUp, // Lottie animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { createUser, handleUpdateProfile ,logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { photo, name, email, password };
    console.log(user);

    // validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password should have at least one upper Case");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Your password should have at least one Special character");
      return;
    }

    // make user
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "Successfully Sign Up to Fast News ",
        });
        handleUpdateProfile(name, photo)
          .then(() => {
            console.log("user profile info updated");
          })
          .catch((error) => {
            console.log(error);
          });

        // navigate("/");
        logout()
        .then(()=>{
          navigate("/login");
        })
        .catch(error=>{
          console.log(error)
        })
      })

      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: error.message,
        });
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col   md:gap-24   lg:flex-row">
          <div className="text-center   lg:text-left">
            <div className="w-8/12 mx-auto mb-5">
              <Lottie options={defaultOptions} />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full lg:mr-24 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body ">
              <h1 className="md:text-5xl text-3xl font-bold mb-5">
                Register now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105">
                  Registration
                </button>
              </div>

              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                Already have an account ?
                <Link to="/login">
                  <button className="font-semibold ms-2 text-blue-600 underline">
                    {" "}
                    Login
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Registration;
