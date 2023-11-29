import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center gap-3 mt-5 ">
      <img src="https://i.ibb.co/Ry8JrzJ/000-404.png" alt="" />
      <Link to="/">
        <button className="btn  btn-accent hover:btn-ghost ">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
