import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllArticleCard = ({ data }) => {
  // console.log(Object.keys(data).join(","))

  const { _id, id, name, image, publisher, tags, description, status } = data;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-[500px] h-[350px]" alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="font-semibold">Publisher : {publisher}</p>
        <h2 className="card-title font-bold font-serif mb-2 "> {name}</h2>
        <p className="text-sm">{description.slice(0, 80)}.....</p>
        <div>
          {tags.map((tag, idx) => (
            <p className="text-sm font-bold" key={idx}>
              #{tag}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/articleDetails/${_id}`}>
            <button className="btn btn-link">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllArticleCard;
