import SectionTitle from "../Hooks/SectionTitle";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Tech Innovations",
      testimonial:
        "Working with this team has been an incredible experience. They delivered our project on time and exceeded our expectations. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Founder, Creative Solutions",
      testimonial:
        "The level of creativity and professionalism displayed by this team is outstanding. They truly understand the client",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "CTO, Digital Ventures",
      testimonial:
        "I was impressed by the technical expertise and dedication of the team. They tackled complex challenges with ease, and the results were remarkable.",
    },
    {
      id: 4,
      name: "Bob Anderson",
      position: "Marketing Director, Global Brands",
      testimonial:
        "Our marketing campaigns have seen a significant boost in performance since partnering with this agency. Their strategic approach has been invaluable.",
    },
    {
      id: 5,
      name: "Emily Taylor",
      position: "Entrepreneur, E-commerce Ventures",
      testimonial:
        "The e-commerce solutions provided by this team have transformed our business. Our online presence has never been stronger, thanks to their expertise.",
    },
  ];

  return (
    <>
      <SectionTitle heading="Testimonial"></SectionTitle>
      <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto my-10 ">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-green-300    p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700">{testimonial.testimonial}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
