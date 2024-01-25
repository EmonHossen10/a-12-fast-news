/* eslint-disable react/prop-types */
 
const ShowPublisher = ({ item }) => {
  const { publisherName, publisherImage } = item;
  return (
    <div className="card card-compact   bg-gray-400 shadow-xl">
      <figure>
        <img   src={publisherImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-serif font-bold text-white ">{publisherName}</h2>
      </div>
    </div>
  );
};

export default ShowPublisher;
