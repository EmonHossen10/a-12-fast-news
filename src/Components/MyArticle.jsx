/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { MdBrowserUpdated, MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../Hooks/SectionTitle";
import Lottie from "react-lottie";
import img from "./noArticle.json";

const MyArticle = () => {
  const { user } = useContext(AuthContext);

  const [article, setArticle] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: img, // Lottie animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const url = `https://fast-news-server.vercel.app/allArticles?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [url]);

  // delete
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fast-news-server.vercel.app/allArticles/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );

              // **************** here remove from ui
              const remaining = article.filter((coffee) => coffee._id !== id);
              setArticle(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <SectionTitle heading="My Article"></SectionTitle>

      {article.length > 0 ? (
        <div className="overflow-x-auto my-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-green-400  text-black font-serif text-xl ">
                <th>SI No</th>
                <th>Details</th>
                <th>Name</th>
                <th>Status</th>
                <th>isPremium</th>
                <th> Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {article?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <Link to={`/details/${item._id}`}>
                      <button className="btn btn-outline btn-warning">
                        Details
                      </button>
                    </Link>
                  </td>
                  <td>{item.name}</td>
                  <td> ststus </td>
                  <td> premium</td>
                  <td>
                    <Link to={`/updateArticle/${item._id}`}>
                    <button>
                      <MdBrowserUpdated className="text-3xl text-sky-500"></MdBrowserUpdated>
                    </button>
                    </Link>
                  </td>
                  <th>
                    <button onClick={() => handleDelete(item._id)}>
                      <MdDeleteForever className="text-4xl text-red-600"></MdDeleteForever>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <p className="text-center text-3xl mt-10 font-bold font-serif">No Article Added</p>
          <div className="w-4/12 mx-auto mb-5">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MyArticle;
