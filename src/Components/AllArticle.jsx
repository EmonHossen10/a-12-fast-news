import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import AllArticleCard from "./AllArticleCard";

const AllArticle = () => {
  const datas = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-2 gap-5 w-11/12  mx-auto my-10 " >
        {datas.map((data) => (
          <AllArticleCard key={data._id} data={data} ></AllArticleCard>
        ))}
      </div>
    </div>
  );
};

export default AllArticle;
