import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Chart } from "react-google-charts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DashHome = () => {
  const { user } = useContext(AuthContext);
  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axios.get("/allArticles");
      console.log(res.articles);
      return res.articles;
    },
  });

  return (
    <div>
      <h2 className="p-6 text-3xl font-serif ">
        Hi!! welcome back, {user.displayName}
      </h2>

      <Chart
      chartType="PieChart"
      data={[
        ["Age", "Weight"],
        ["Category 1", 4],
        ["Category 2", 8],
      ]}
      width="100%"
      height="400px"
      legendToggle
    />
      {/* <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
        <div className="avatar">
          <div className="w-48 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold"  >{user?.displayName}</h2>
        <h3 className="  font-serif font-semibold">Email: {user?.email} </h3>
      </div> */}
    </div>
  );
};

export default DashHome;
