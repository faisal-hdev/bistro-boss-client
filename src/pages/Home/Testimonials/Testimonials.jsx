import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="pb-24">
      <SectionTitle subHeading="What Our Clients Say" heading="TESTIMONIALS" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center mx-12 md:mx-24 flex flex-col items-center space-x-3 md:space-y-6">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h2 className="text-xl md:text-3xl font-medium text-yellow-500">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
