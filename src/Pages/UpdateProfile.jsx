import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { email, name, image, _id } = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const info = { name, image };
    console.log(info);
    fetch(`http://localhost:5000/personalUsers/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/myProfile" || "/");
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: " Article Updated  Successfully",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center  h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Update Profile
          </h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Your Name"
                defaultValue={name}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Photo URL
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="URL of Your Photo"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                disabled
                defaultValue={email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Your Email"
                required
              />
              <label className="text-sm text-red-500 font-semibold">
                cannot change this field
              </label>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
