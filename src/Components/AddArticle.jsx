import Navbar from "./Navbar";

const AddArticle = () => {
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title </span>
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
                <span className="label-text"> Publisher</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Publisher "
                
                className="input input-bordered input-info  "
                required
              />
            </div>
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Long Description </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price here"
                className="input input-bordered input-info  "
                required
              />
            </div>
            

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-info">Add Article</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
