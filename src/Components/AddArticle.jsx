import { useState } from "react";
import Navbar from "./Navbar";

const AddArticle = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 w-8/12 rounded-xl mx-auto">
          <form className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Add Article
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Article Title </span>
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Title "
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Article Image </span>
              </label>
              <input
                type="text"
                name="servicePhoto"
                placeholder="Article Image"
                className="input input-bordered input-info  "
                required
              />
            </div>

            <section className="grid grid-cols-2">
              <div className="form-control w-[300px]">
                <label className="label">
                  <span className="label-text">Publisher</span>
                </label>
                <select
                  name="publisher"
                  className="select select-bordered select-info"
                  required
                >
                  <option value="" disabled selected>
                    Select Publisher
                  </option>
                  <option value="option1">Dhaka Daily</option>
                  <option value="option2">Bengal Beacon</option>
                  <option value="option3">BBC</option>
                  <option value="option3">CNN</option>
                  <option value="option3">Barishal Buzz</option>
                  <option value="option3">Business Daily</option>
                </select>
              </div>
              <div className="form-control w-[300px]">
                <label className="label">
                  <span className="label-text">Tags</span>
                </label>
                <select
                  name="publisher"
                  className="select select-bordered select-info"
                  required
                >
                  <option value="" disabled selected>
                    Select Tags
                  </option>
                  <option value="option1">LifeStyle</option>
                  <option value="option2">Technology</option>
                  <option value="option3">Foreign</option>
                  <option value="option3">Business</option>
                  <option value="option3">Sports</option>
                </select>
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
              ></textarea>
            </div>

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-info">Submit </button>
            </div>
            <p className="font-bold text-sm mt-3">
             *** Note : This wont show on all articles page until admin approves
          </p>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
