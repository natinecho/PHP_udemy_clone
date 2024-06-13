import React, { useRef, useState } from 'react';

import personone from "../asset/personone.png";
import persontwo from "../asset/persontwo.png";
import Design from "../asset/Design.jpg";
import Development from "../asset/Development.jpg";
import Personal from "../asset/Personal-Development.jpg";
import IT from "../asset/IT-and-Software.jpg";
import Music from "../asset/Music.jpg";
import Marketing from "../asset/Marketing.jpg";
import Business from "../asset/Business.jpg";
import Photography from "../asset/Photography.jpg";
import firstwoman from "../asset/frontimg.jpg";
import firstman from "../asset/frontimg2.jpg";
import Courses from '../component/Courses';
import Partner from '../component/Partner';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';




const CourseList = ({ title, courses }) => (
  <div className="flex flex-col   gap-y-2 sm:p-3 sm:text-2xl">
    <h1 className="font-bold">{title}</h1>
    {courses.map((course, index) => (
      <div key={index} className="flex flex-col gap-y-2 p-2 ">
        <h1 className="font-bold text-sm  sm:text-xl text-blue-500  underline p-2">{course.name}</h1>
        <h3 className="text-xs sm:text-l">{course.learners} learners</h3>
      </div>
    ))}
  </div>
);

const CatagorieCard = ({name,img}) => (
    <div>
        <img className = "hidden sm:block sm: w- 2/3 hover:translate-y-2" src= {img} alt="" />
        <p className='px-3 py-1 my-2   border border-[#4a154b] rounded-xl sm:border-none sm:font-bold '>{name}</p>  
  </div>

)


function Home() {

  const courseData = {
    Development: [
      { name: 'Python', learners: '36,132,546' },
      { name: 'Web Development', learners: '11,435,546' },
      { name: 'Machine Learning', learners: '7,435,546' },
    ],
    "IT and Software": [
      { name: 'Amazon AWS', learners: '36,132,546' },
      { name: 'Ethical Hacking', learners: '11,435,546' },
      { name: 'Cyber Security', learners: '7,435,546' },
    ],
    Business: [
      { name: 'Financial Analysis', learners: '1,195,282' },
      { name: 'SQL', learners: '5,977,546' },
      { name: 'PMP', learners: '1,733,398' },
    ],
    Design: [
      { name: 'Photoshop', learners: '10,909,736' },
      { name: 'Graphic Design', learners: '3,381,052' },
      { name: 'Drawing', learners: '2,410,849' },
    ],
  };

  const catagoryData = [
    {name:"Music", img:Music},
    {name:"Design", img:Design},
    {name:"Business", img:Business},
    {name:"Marketing", img:Marketing},
    {name:"Photography", img:Photography},
    {name:"Development", img:Development},
    {name:"IT and Software", img:IT},
    {name:"Personal Development", img:Personal}
];


  return (
    <>

      <div>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            
            
          >
      <SwiperSlide>
        <div style={{
            backgroundImage: `url(${firstwoman})`, 
          }}  className='h-300 p-8 w-full'>
          <p className="p-8 bg-white w-1/3 h-60">
            <h1 className='font-bold text-3xl p-2'>
              A big sale for your big opportunity</h1>
              With courses from $9.99, it’s the right
              time for the right skills and you. Our 
              biggest sale of the season ends May 23.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{
            backgroundImage: `url(${firstman})`, 
          }}    className='h-300 p-8 w-full'>
          <p className="p-8 bg-white w-1/3 h-30vh">
            <h1 className='font-bold text-3xl p-2'>
              A big sale for your big opportunity</h1>
              With courses from $9.99, it’s the right
              time for the right skills and you. Our 
              biggest sale of the season ends May 23.
          </p>
        </div>
      </SwiperSlide>

    </Swiper>

      </div>
      <Partner/>
      <Courses/>


      <div className='sm:py-8 sm:px-7'>
      <h1 className='text-2xl font-bold px-6'> Top Catagories</h1>
       <div className='flex flex-wrap p-4 justify-between items-center '>
           {catagoryData.map((category) => (
           <CatagorieCard key={category.name} name={category.name} img={category.img} />
           ))}
      </div>
      </div> 

      <div className='bg-[#F5F5F5] p-6 mb-3'>
        <h1 className = "mb-3 text-2xl font-bold sm:text-3xl">Feautred topics by catagory</h1>
        <div className = "flex  flex-wrap  justify-between p-4">
              {Object.entries(courseData).map(([title, courses]) => (
              <CourseList key={title} title={title} courses={courses} />
            ))}
        </div>
        <button className=' w-full sm:w-1/4 m-2 sm:m-4  p-2 sm:p-3 hover:bg-[#4a154b] hover:text-white border border-[#4a154b] font-bold'> Explore more topic</button>
      </div>

      <div>
        <div className='flex flex-wrap-reverse p-3 sm:items-center sm:justify-center sm:p-8'>
            <div className='flex flex-col gap-y-2 p-3'>
              <h1 className='font-bold text-center text-xl sm:text-left sm:text-3xl'>Udemy <span className='text-blue-600'>business</span></h1> 
              <h1 className=' font-bold text-center text-l sm:text-left sm:text-3xl'>Upskill your team with Udemy Business</h1>
              <ul className="list-disc pl-5 text-sm sm:text-xl p-2">
                <li> Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
                <li> International course collection in 14 languages</li>
                <li> Top certifications in tech and business</li>
              </ul> 
              <div className='flex flex-wrap'>
                  <button className='w-4/5 sm:w-1/3 m-2 p-3 bg-[#4a154b] text-white hover:bg-white hover:text-[#4a154b] border border-[#4a154b] font-bold'> Explore more topic</button>
                  <button className='w-4/5 sm:w-1/3 m-2 p-3 hover:bg-white border border-[#4a154b] font-bold'> Learn More</button>
              </div>
            </div>
            <img  src={persontwo} alt="people" className='sm:w-1/3' />
        </div>

        <div className=' flex flex-wrap p-3 sm: gap-x-20 sm:items-center sm:justify-center sm:p-8'>
            <img  src={personone} alt="people" className='sm:w-1/3' />
            <div className='flex flex-col  gap-y-5'>
              <h1 className='font-bold text-center text-xl sm:text-4xl sm:text-left'>Become instructor</h1> 
              <p className='sm:text-xl'>Instructors from around the world teach millions of learners on Udemy.<br/>
               We provide the tools and skills to teach what you love.</p>
               <Link  to = "/addCourse" className='w-4/5 sm:w-1/2 m-2 p-3 bg-[#4a154b] text-white hover:bg-white hover:text-[#4a154b] border border-[#4a154b] font-bold'> Start teaching today</Link>

            </div>
        </div>
      </div>
    </>
  )
}

export default Home
