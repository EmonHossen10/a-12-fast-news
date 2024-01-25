import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";

const UpdateArticle = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  // console.log(Object.keys(data).join(','))
  const { _id, name, publisher, description, image, tags, email } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const publisher = form.elements.publisher.value;
    const description = form.description.value;
    const newUpdateArticle = { name, image, publisher, description };

    console.log(newUpdateArticle);
    fetch(`https://fast-news-server.vercel.app/allArticles/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUpdateArticle),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/myArticle" || "/");
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

      <div className=" rounded-xl my-5 w-11/12 mx-auto bg-base-200">
        <h1 className="text-3xl text- pt-4 ps-9 font-bold">
          Update Service : {name}{" "}
        </h1>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Article Title </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
              defaultValue={name}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL </span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          {/* publisher */}
          <div className="form-control w-[300px]">
            <label className="label">
              <span className="label-text">Publisher</span>
            </label>
            <select
              name="publisher"
              className="select select-bordered select-info"
              defaultValue="default"
              required
            >
              <option defaultValue={publisher} required disabled>
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

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              name="description"
              required
              rows={6}
              defaultValue={description}
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-secondary">Update</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateArticle;
