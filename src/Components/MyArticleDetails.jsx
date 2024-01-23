import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SectionTitle from "../Hooks/SectionTitle";

const MyArticleDetails = () => {
  const data = useLoaderData();
  // console.log(Object.keys(data).join(","))
  const { _id, name, publisher, description, image, tags, email } = data;

  return (
    <div>
      <Navbar></Navbar>
      <SectionTitle heading="Article Details"></SectionTitle>

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

export default MyArticleDetails;
