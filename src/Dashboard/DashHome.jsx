import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const DashHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      
      <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
        <div className="avatar">
          <div className="w-48 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold"  >{user?.displayName}</h2>
      </div>
    </div>
  );
};

export default DashHome;
