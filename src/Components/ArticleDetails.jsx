import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ArticleDetails = () => {
  const item = useLoaderData();
  // console.log(Object.keys(item).join(","))
  const { _id, id, name, image, publisher, tags, description, status } = item;
  return (
    <div>
      <Navbar></Navbar>

      <div className="card w-10/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-[500px] w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold font-serif">{name}</h2>
          <p className="text-sm my-4">{description}</p>
          <div className="grid grid-cols-2 items-center my-4">
           
            <div>
              {tags.map((tag, idx) => (
                <p className="text-sm font-bold" key={idx}>
                  #{tag}
                </p>
              ))}
            </div>
               <p className="font-semibold"> Publisher : {publisher}</p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ArticleDetails;
