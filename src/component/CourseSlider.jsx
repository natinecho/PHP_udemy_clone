import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import React, { useState, useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const CourseSlider = () => {
  const [cards, setCards] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);

  useEffect(() => {
    fetch('http://localhost:7000/api/posts')
      .then(response => response.json())
      .then(data => {
        setCards(data.map(item => ({
          id: item._id,
          title: item.title,
          content: item.content,
          category: item.category,
          photo: item.photo,
          videos: item.videos,
          createdAt: item.createdAt
        })));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePrevSlide = () => {
    const prevSlideIndex = activeSlide - 1;
    setActiveSlide(prevSlideIndex >= 0 ? prevSlideIndex : 0);
  };

  const handleNextSlide = () => {
    const nextSlideIndex = activeSlide + 1;
    setActiveSlide(nextSlideIndex < cards.length ? nextSlideIndex : cards.length - 1);
  };

  return (
    <div className="flex sm:w-full">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="w-full"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {cards.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 mb-8"
            onMouseEnter={() => setHoveredSlide(item.id)}
            onMouseLeave={() => setHoveredSlide(null)}
          >
            <div className="flex flex-col items-start space-y-[1px]">
              {item.photo && <img src={`http://localhost:7000/${item.photo}` } alt={item.title} className="h-full w-full" />}

              <h2 className="font-bold text-md pt-1">{item.title}</h2>
              <h2 className="text-xs text-gray-700">{item.category}</h2>
              <h3 className="text-black font-bold">{item.price}</h3>

              <div className="flex space-x-1">
                <div className="space-x-4 items-center">
                  {/* <h3 className="text-black font-bold">{item.price}</h3> */}
                </div>
              </div>
            </div>
            {hoveredSlide === item.id && (
              <div className="bg-white flex flex-col justify-center items-center text-black p-4 rounded-lg">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p>{item.content}</p>
                
                <div className="flex jusitfy-between">
                  <Link to={`/post/${item.id}`} className="bg-[#4a154b] text-white font-bold text-lg hover:bg-[#4a153b] p-2 mt-8">
                    Add to cart
                  </Link>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;