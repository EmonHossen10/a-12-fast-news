import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import AllPublisher from "./AllPublisher";
import BreakingNews from "./BreakingNews";
import Counter from "./Counter";
import Fashion from "./Fashion";
import Featured from "./Featured";
import Plans from "./Plans";
import TrendingNews from "./TrendingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <TrendingNews></TrendingNews>
      <AllPublisher></AllPublisher>
      <Counter></Counter>
      <Plans></Plans>
      <Fashion></Fashion>
      <Featured></Featured>


      <Footer></Footer>
    </div>
  );
};

export default Home;
