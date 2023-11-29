import { FaCalendar } from "react-icons/fa";
import SectionTitle from "../Hooks/SectionTitle";
import moment from "moment";

const Featured = () => {
  return (
    <div>
      <SectionTitle heading="Featured News"></SectionTitle>

  <section className="flex justify-evenly" >
  <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/4dHdkgc/pexels-photo-4200831.jpg"
            alt="Shoes"
          />
        </figure>

        <div className="card-body">
          <article className="flex items-center gap-5 mb-6">
            <span className="bg-red-500 p-1 font-bold w-24   ">Technology</span>
            <FaCalendar></FaCalendar>{" "}
            <p className="text-sm">{moment().format(" MMMM D, YYYY ")}</p>
          </article>
          <h2 className="card-title">
            Trash to treasure: How Google thinks about deconstruction
          </h2>
        </div>
      </div>
      {/* 2nd */}
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/NC08nqF/pexels-photo-833337.jpg"
            alt="Shoes"
          />
        </figure>

        <div className="card-body">
          <article className="flex items-center gap-5 mb-6">
            <span className="bg-red-500 p-1 font-bold w-24   ">Technology</span>
            <FaCalendar></FaCalendar>{" "}
            <p className="text-sm">{moment().format(" MMMM D, YYYY ")}</p>
          </article>
          <h2 className="card-title">
          Spring Fashion Show at the University of Michigan Has Started.
          </h2>
        </div>
      </div>
  </section>
    </div>
  );
};

export default Featured;
