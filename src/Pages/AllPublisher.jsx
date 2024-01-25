import axios from "axios";
import SectionTitle from "../Hooks/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import ShowPublisher from "./ShowPublisher";

const AllPublisher = () => {
  // Using tanstack query
  const { data: publishers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/publishers");
      // console.log(res.data);
      return res.data;
    },
  });

  return (
    <>
      <SectionTitle heading="All Publisher"></SectionTitle>

      <div className="grid grid-cols-3  gap-10 w-11/12 mx-auto ">
        {publishers.map((item) => (
          <ShowPublisher key={item._id} item={item}></ShowPublisher>
        ))}
      </div>
    </>
  );
};

export default AllPublisher;
