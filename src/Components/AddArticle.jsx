/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Select from "react-select";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticle = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  console.log(email);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  // select form
  const options = [
    { value: "LifeStyle", label: "LifeStyle" },
    { value: "Technology", label: "Technology" },
    { value: "Foreign", label: "Foreign" },
    { value: "Business", label: "Business" },
    { value: "Sports", label: "Sports" },
    { value: "BreakingNews", label: "BreakingNews" },
  ];

  // tags
  useEffect(() => {
    // Log the selected tags when the state updates
    console.log("Selected Tags:", selectedTags);
  }, [selectedTags]);

  const handleChange = (selectedOptions) => {
    // Ensure that selectedOptions is an array
    setSelectedTags(selectedOptions || []);
  };
  // image select
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const formRef = useRef(null);
  // adding db 2
  const handleAddToDB = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const publisher = form.elements.publisher.value;
    const description = form.description.value;
    if (!selectedImage) {
      console.error("No image selected.");
      return;
    }
    try {
      // Upload the image to ImgBB
      const formData = new FormData();
      formData.append("image", selectedImage);

      const imgbbResponse = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Get the hosted image URL from the ImgBB API response
      const hostedImageUrl = imgbbResponse.data.data.url;

      // Make a request to your backend API to save the article data to MongoDB
      console.log(selectedTags);
      await axios
        .post("http://localhost:5000/articles", {
          name,
          publisher,
          description,
          image: hostedImageUrl,
          tags: selectedTags.map((tag) => tag.value),
          email,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Article has been Added  successfully .",
            });
          }
        });

      if (formRef.current) {
        formRef.current.reset();
      } else {
        console.error("formRef is null");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 w-8/12 rounded-xl mx-auto">
          <form ref={formRef} onSubmit={handleAddToDB} className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Add Article
            </h2>
            {/* name */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Article Title </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Title "
                className="input input-bordered input-info  "
              />
            </div>

            {/* publisher */}

            <section className="grid grid-cols-2">
              <div className="form-control w-[300px]">
                <label className="label">
                  <span className="label-text">Publisher</span>
                </label>
                <select
                  name="publisher"
                  className="select select-bordered select-info"
                  defaultValue="default"
                >
                  <option value="default" disabled>
                    Select Publisher
                  </option>
                  <option value="Dhaka Daily">Dhaka Daily</option>
                  <option value="Bengal Beacon">Bengal Beacon</option>
                  <option value="BBC">BBC</option>
                  <option value="CNN">CNN</option>
                  <option value="Barishal Buzz">Barishal Buzz</option>
                  <option value="Business Daily">Business Daily</option>
                </select>
              </div>
              {/* tags */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tags</span>
                </label>
                <Select
                  isMulti
                  name="tags"
                  options={options}
                  className="select-container"
                  classNamePrefix="select"
                  onChange={handleChange}
                />
                {/* Use selectedTags array as needed */}
              </div>
            </section>
            {/* image */}
            <div>
              <label
                htmlFor="imageInput"
                className="bg-gray-400 p-2 text-white rounded mr-2"
              >
                Choose an Image :
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
              />

              {selectedImage && (
                <div>
                  <p>Selected Image : {selectedImage.name}</p>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Preview"
                    style={{ maxWidth: "300px", maxHeight: "300px" }}
                  />
                </div>
              )}
            </div>
            {/* ********************** */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Article Description </span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-info">Submit </button>
            </div>
            <p className="font-bold text-sm mt-3">
              *** Note : This wont show on all articles page until admin
              approves
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
