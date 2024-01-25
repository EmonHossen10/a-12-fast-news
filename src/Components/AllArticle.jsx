import AllArticleCard from "./AllArticleCard";
import SectionTitle from "../Hooks/SectionTitle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";

const AllArticle = () => {
  const data = useLoaderData();
  // const approval=  data.find(item=>console.log(item.approve)) ;
  // console.log(approval)

  return (
    <div>
      <Navbar></Navbar>
      <SectionTitle heading="All Articles"> </SectionTitle>

      <div className="grid grid-cols-3 gap-5 w-11/12  mx-auto my-10 ">
        {data?.map((data) => (
          <AllArticleCard key={data._id} data={data}></AllArticleCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllArticle;
