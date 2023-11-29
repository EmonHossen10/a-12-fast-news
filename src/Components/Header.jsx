import moment from "moment/moment";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center font-poppins mt-3 ">
      <Link to="/" >
      <h2 className="text-5xl font-bold mb-2 ">
        Fast <span className="text-blue-500">News </span>
      </h2>
      </Link>
      <p   >Get your daily updates</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY ")}</p>
    </div>
  );
};

export default Header;
