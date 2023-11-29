import SectionTitle from "../Hooks/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaEye } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";

const TrendingNews = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <SectionTitle heading="Trending News"></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper    "
      >
        {data.map((item) => (
          <SwiperSlide className="mb-10" key={item.id}>
            <Link to="/">
              <img
                className="w-[450px] h-[300px] hover:opacity-60"
                src={item.image}
                alt=""
              /> 
            </Link>
            <h2 className="font-bold"> {item.title}</h2>
            {item.long_description.slice(0, 100)}...
            <FaEye className="text-sm" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingNews;
