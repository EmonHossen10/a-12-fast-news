import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import AllPublisher from "./AllPublisher";
import BreakingNews from "./BreakingNews";
import TestPurpose from "./TestPurpose";
import Featured from "./Featured";
import Plans from "./Plans";
import Lottie from "react-lottie";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import img from "../Routes/loading.json";

const Home = () => {
  const { loading } = useContext(AuthContext);

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
  } else {
    return (
      <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        
        <AllPublisher></AllPublisher>
        <Plans></Plans>
        <Featured></Featured>
        {/* testpurpose is use for showing modal after 10 seconds */}
        {/* <TestPurpose></TestPurpose> */}
        <Footer></Footer>
      </div>
    );
  }
};

export default Home;
