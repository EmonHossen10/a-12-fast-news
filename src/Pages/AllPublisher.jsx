import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Hooks/SectionTitle";

const AllPublisher = () => {
  const datas = useLoaderData();

  return (
    <>
      <SectionTitle heading="All Publisher"></SectionTitle>
      {/* {datas?.map((data) => (
        <>
          <div className="avatar flex-col ml-5 gap-5 justify-center text-center">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.image} />
            </div>
            <p>{data.publisher}</p>
          </div>
        </>
      ))} */}
    </>
  );
};

export default AllPublisher;
