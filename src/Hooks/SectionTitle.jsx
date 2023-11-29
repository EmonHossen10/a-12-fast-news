const SectionTitle = ({ heading }) => {
  return (
    <div className="md:w-3/12 text-center mx-auto my-8">
      <h3 className="text-3xl text-blue-500 font-bold uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
