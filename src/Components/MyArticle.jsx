/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { MdBrowserUpdated, MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const MyArticle = () => {
  const { user } = useContext(AuthContext);

  const [article, setArticle] = useState([]);

  const url = `http://localhost:5000/allArticles?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [url]);

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
              <>
                <tr>
                  <th>{idx + 1}</th>
                  <td>
              <Link  to={`/details/${item._id}`}>
              <button className="btn btn-outline btn-warning">Details</button>
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
                    <button>
                      <MdDeleteForever className="text-4xl text-red-600"></MdDeleteForever>
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyArticle;
