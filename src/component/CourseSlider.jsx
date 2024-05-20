import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, FreeMode, Pagination } from "swiper/modules"
import React, { useState } from "react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { StarIcon } from "@heroicons/react/24/solid"
import { cards } from "../data"
const CourseSlider = () => {
	const [activeSlide, setActiveSlide] = useState(0)

	const handlePrevSlide = () => {
		// Move to the previous slide
		const prevSlideIndex = activeSlide - 1
		setActiveSlide(prevSlideIndex >= 0 ? prevSlideIndex : 0)
	}

	const handleNextSlide = () => {
		// Move to the next slide
		const nextSlideIndex = activeSlide + 1
		setActiveSlide(
			nextSlideIndex < cards.length ? nextSlideIndex : cards.length - 1
		)
	}

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
				onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Update active slide index
			>
				{cards.map((item) => (
					<SwiperSlide
						key={item.id}
						className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 mb-8"
					>
						<div className="flex flex-col items-start space-y-[1px]">
							<img
								src={item.image}
								alt="image_"
								className="h-full w-full"
							/>
							<h2 className="font-bold text-md pt-1">
								{item.title}
							</h2>
							<h2 className="text-xs text-gray-700">
								{item.username}
							</h2>
							<div className="flex space-x-1">
								<h3 className="text-orange-800 font-bold text-sm">
									{item.vote}
								</h3>
								<div className="flex items-center">
									<StarIcon className="w-4 text-orange-400" />
									<StarIcon className="w-4 text-orange-400" />
									<StarIcon className="w-4 text-orange-400" />
									<StarIcon className="w-4 text-orange-400" />
									<StarIcon className="w-4 text-orange-400" />
								</div>
								<div>
									<h3 className="text-2xs">
										{item.students}
									</h3>
								</div>
								<div className="space-x-4 items-center">
									<h3 className="text-black font-bold">
										{item.price}
									</h3>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default CourseSlider
