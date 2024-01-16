import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import errorImage from "./errorImage.json";

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorImage, // Lottie animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-[1280px] mx-auto text-center ">
      {/* <img src="https://i.ibb.co/Ry8JrzJ/000-404.png" alt="" /> */}
      <div className="w-6/12 mx-auto mb-5">
        <Lottie options={defaultOptions} />
      </div>
      <Link to="/">
        <button className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-500">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
