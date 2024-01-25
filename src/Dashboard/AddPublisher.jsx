import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useRef, useState } from "react";

const AddPublisher = () => {
  const axiosSecure = UseAxiosSecure();

  //

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const publisherName = form.name.value;
    const publisherImage = form.image.value;
    const info = { publisherName, publisherImage };
    console.log(info);
    axiosSecure
      .post("/addPublisher", info)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          console.log("user added to db");
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: `${publisherName} successfully added to the DB`,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    formRef.current.reset();
  };
  return (
    <div>
      <h2 className="text-3xl capitalize mt-8">
        this is adding publisher page
      </h2>

      <div className="max-w-md  text-black mx-auto my-8 p-6 bg-gradient-to-r from-sky-400 to-sky-500 shadow-md rounded-md  ">
        <h2 className="text-2xl font-bold mb-4">Add Publisher</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Publisher Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-sky-300"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-bold mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-sky-300"
              placeholder="Enter image URL"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPublisher;
