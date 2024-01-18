/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { MdBrowserUpdated, MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArticle = () => {
  const { user } = useContext(AuthContext);

  const [article, setArticle] = useState([]);

  const url = `http://localhost:5000/allArticles?email=${user?.email}`;
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
        fetch(`http://localhost:5000/allArticles/${id}`, {
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
      <h2>MY ARTICLE</h2>
      <div className="overflow-x-auto">
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
                  <button>
                    <MdBrowserUpdated className="text-3xl text-sky-500"></MdBrowserUpdated>
                  </button>
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

      <Footer></Footer>
    </div>
  );
};

export default MyArticle;
