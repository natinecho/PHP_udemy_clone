import React from "react"

import CourseSlider from "./CourseSlider"

function Courses() {
	return (
		<div className="flex flex-col items-strat mx-8 space-y-3 mt-14 mb-8">
			<h2 className="text-4xl font-bold">A broad selection of courses</h2>
			<h3 className="text-xl">
				Choose from over 210,000 online video courses with new additions
				published every month
			</h3>

			<div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
				<h3>Python</h3>
				<h3>Excel</h3>
				<h3>Web Development</h3>
				<h3 className="text-black">JavaScript</h3>
				<h3>Data Science</h3>
				<h3>AWS Certification</h3>
				<h3>Drawing</h3>
			</div>

			<div className="text-left w-full border border-gray-300 p-7">
				<h2 className="text-2xl font-bold mb-2">
					Grow your software development skills with JavaScript
				</h2>
				<h3 className="">
					JavaScript is a text-based computer programming language
					used to make dynamic web pages. A must-learn for aspiring
					web developers or programmers, JavaScript can be used for
					features like image carousels, displaying countdowns and
					timers, and playing media on a webpage. With JavaScript
					online classes, you can learn to build...
				</h3>
				<button className=" p-2 mt-4 mb-8 bg-[#4a154b] text-white hover:bg-white hover:text-[#4a154b] border border-[#4a154b] font-bold">
					Explore JavaScript
				</button>

				<CourseSlider />
			</div>
			<div className="sm:py-8 sm:px-7">
				<h1 className="text-2xl font-bold p-6">
					{" "}
					Learners are viewing
				</h1>

				<CourseSlider />
			</div>
		</div>
	)
}

export default Courses
