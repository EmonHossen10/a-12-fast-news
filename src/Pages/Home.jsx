import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import AllPublisher from "./AllPublisher";
import BreakingNews from "./BreakingNews";

import Featured from "./Featured";
import Plans from "./Plans";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <AllPublisher></AllPublisher>
      <Plans></Plans>
      <Featured></Featured>
      <Footer></Footer>
    </div>
  );
};

export default Home;
