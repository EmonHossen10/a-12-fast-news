/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  // Using tanstack query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axios.patch(`http://localhost:5000/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-3xl  font-bold">All Users : {users.length} </h2>
      </div>

      {/* table */}

      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2 border border-r font-bold">SI No</th>
              <th className="p-2 border border-r font-bold">Name</th>
              <th className="p-2 border border-r font-bold">Email</th>
              <th className="p-2 border border-r font-bold">Profile Picture</th>
              <th className="p-2 border font-bold">Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr
                key={user._id}
                className={idx % 2 === 0 ? "bg-gray-200" : "bg-gray-300"}
              >
                <td className="p-2 font-semibold border border-r">{idx + 1}</td>
                <td className="p-2 font-semibold border border-r">
                  {user.name}
                </td>
                <td className="p-2 font-semibold border border-r">
                  {user.email}
                </td>
                <td className="p-2 font-semibold border border-r">
                  <div className="avatar">
                    <div className="w-16 rounded-xl overflow-hidden">
                      <img
                        src={user.image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-2 font-semibold border">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
