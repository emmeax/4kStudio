import fil from '../assets/fil.png'
import Footers from '../contactPage/Footers'
import Visual from '../assets/Visuals.png'
import rightframe from '../assets/rightframe.png'
import memframe2 from '../assets/memframe2.png'
import leftFrame from '../assets/leftFrame.png'
// import hero from '../assets/hero.png'
// import location from '../assets/location.png'
// import work from '../assets/work.png'
// import hero2 from '../assets/hero2.png'
import side from '../assets/side.png'
import work_frame1 from '../assets/work_frame1.png'
import work_frame2 from '../assets/work_frame2.png'
import D_Visuals from '../assets/D_Visuals.png'
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Ellipse from '../assets/workimage/Ellipse.png'
import { useState } from 'react'
import FRM from '../assets/FRM.png'
import FRM2 from '../assets/FRM2.png'
import FRMS from '../assets/FRMS.png'
import { TbNorthStar } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";





const Header = () => {
  const testimonials = [
    {
      text: "Working with this team completely transformed our brand! Their creativity and attention to detail brought our vision to life in ways we couldn’t have imagined. They took the time to truly understand our goals.",
      name: "Sinclair Husk",
      position: "Head of corporate development, Teamwork.",
      image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1739157427/samples/emmeax1/Ellipse_kmlkyz.png"
    },
    {
      text: "Exceptional service and top-notch designs! They understood our needs perfectly and delivered beyond expectations.",
      name: "Sinclair Husk",
      position: "Head of corporate development, Teamwork.",
      image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1739157427/samples/emmeax1/Ellipse_kmlkyz.png"
    },
    
    
    {
      text: "A game-changer for our business. Their fresh ideas and dedication helped us connect with our audience like never before.",
      name: "Sinclair Husk",
      position: "Head of corporate development, Teamwork.",
      image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1739157427/samples/emmeax1/Ellipse_kmlkyz.png"  
    },

    {
      text: "Professional, creative, and reliable. They turned complex concepts into stunning visuals effortlessly.",
       name: "Sinclair Husk",
      position: "Head of corporate development, Teamwork.",
      image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1739157427/samples/emmeax1/Ellipse_kmlkyz.png"
    },
    
    {
      text: "Their passion for design shines through in every project. Truly a pleasure to work with!",
      name: "Sinclair Husk",
      position: "Head of corporate development, Teamwork.",
      image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1739157427/samples/emmeax1/Ellipse_kmlkyz.png"
    },
  ];

  
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setActiveButton("right");
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setActiveButton("left");
  };
  return (
    <div className="min-h-screen font-outfit">
      <header className="text-center mt-16">
        
        {/* Top Logo Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 text-left font-outfit">
          <h2 className='text-[#151E99] font-bold font-outfit text-5xl '>Visual That Resonate, <span className=''><br /> Design that Inspire</span></h2>
          <img src={leftFrame} alt="Left Frame" className="hidden lg:block mt-6 lg:mt-20 w-[30px] md:w-[40px] lg:w-[50px]" />
        </div>

        {/* Content Section - Swapping Order for Mobile */}
        <div className="mt-12 lg:mt-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
          
          {/* Text Section - Moves Above Images on Small Screens */}
          <div className="lg:w-1/2 block lg:hidden">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-left mb-8 font-outfit font-bold ">
              At 4K Studios, we specialize in Graphic Design, Illustration, and 3D Art that turn ideas into unforgettable visuals. From event graphics to album covers, we amplify your vision with stunning, custom-made designs.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex flex-col  lg:justify-end mb-20 ">
          <button className="flex items-center gap-2 relative font-bold text-4xl mb-8 focus:outline-none hover:text-blue-500 transition duration-300">
  Let's Create Together 
  <GoArrowRight />
  <span className="absolute bottom-0 left-0 w-4/5 h-0.5 bg-black mt-5"></span> {/* Underline */}
</button>
<div className="">
  <p className="flex items-center gap-4 text-left font-semibold text-3xl">
    You'll be talking to our <br /> creative members.
    <img src={memframe2} alt="Creative Members" className="w-auto h-auto" />
  </p>
</div>
</div>

          {/* Text Section - Stays Below Images on Large Screens */}
          <div className="lg:w-1/2 hidden lg:block">
            <p className="text-gray-600 text-5xl sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-left lg:text-left mb-20 ">
              At 4K Studios, we specialize in Graphic Design, Illustration, and 3D Art that turn ideas into unforgettable visuals. From event graphics to album covers, we amplify your vision with stunning, custom-made designs.</p>
          </div>

        </div>

        {/* Hero Image Section */}
        <div className="relative">
          <img src={fil} alt="Hero" className="w-full h-auto" />
          <div className="absolute -top-14 right-8 flex items-center space-x-4 max-w-xs">
            <img src={side} alt="Side Icon" className="w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64" />
          </div>
          <div className="absolute -bottom-0  left-8 bg-white p-6 rounded-t-xl shadow-lg max-w-md">
    <h2 className="text-blue-900 text-3xl font-semibold text-left ">
      Let’s Discover Your Brand’s Next Chapter With Our Vision.
    </h2>
    <div className="mt-4 relative ">
      <input
        type="text"
        placeholder="What’s your name?"
        className="w-full p-7 border border-gray-600 rounded-full text-gray-600 "
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full">
      <GoArrowUpRight
      // onClick='#'
       size={30} />

      </button>
    </div>
  </div>
        </div>
        

        {/* Other Sections */}
        <section className="bg-gray-100 py-20 px-4 lg:px-10">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
    {/* Left Section */}
    <div className="lg:col-span-5 flex flex-col justify-between h-full text-left">
      <h2 className="text-gray-500 text-xl md:text-3xl lg:text-4xl font-medium font-outfit ">
        Digital Agency based in
        <span className="  font-semibold text-gray-800 text-left ">
         <br /> Design City, USA.
        </span>
      </h2>
      <button className="bg-[#03095B] w-fit text-white py-3 px-6 rounded-full flex items-center space-x-2 hover:opacity-90 transition mt-10 lg:mt-auto">
        <span>Explore Our Work</span>
        <span className="text-sm">→</span>
      </button>
    </div>

    {/* Right Section */}
    <div className="lg:col-span-7 space-y-6">
      <p className="text-2xl text-left font-light leading-relaxed max-w-[65ch]">
        4K Studios is a visionary design studio at the forefront of <br />
        Graphic Design, Illustration, and 3D Art. We specialize in <br />
        creating immersive, bold visuals that make an impact. Catering <br />
        to event companies, musicians, and a variety of industries, we <br />
        transform creative concepts into stunning realities. Our mission <br />
        is to produce designs that inspire and engage while maintaining <br />
        exceptional quality and precision.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src={FRMS}  alt="" />
          <h3 className="text-5xl font-semibold text-gray-900 relative text-left mt-5 text-5xl">92%</h3>
          <p className="text-gray-600 mt-2 relative text-sm text-left">Our agency has produced <br /> many products that have been live, showcasing our expertise in delivering high-quality.</p>
        </div>

        <div className="relative inline-block">
          <img src={FRM} alt="" />
          <h3 className="absolute top-20 ml-3 flex items-center justify-center text-5xl font-semibold text-white">64%</h3>
          <p className="text-gray-600 mt-3 relative text-left ml-2">Our agency has produced many products that have been live, showcasing our expertise <br /> in delivering high-quality.</p>
        </div>

        <div className="relative inline-block">
          <img src={FRM2} className='h-72 rounded-xl' alt="" />
          <div className='absolute top-32 ml-3  font-bold text-white text-left'>
          <h3 className="text-5xl font-semibold relative">0%</h3>
          <p className="  relative mt-3 ">Our agency has produced <br /> products that have been <br /> live.</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
    
        <section className="bg-[#03095B] text-white py-16 px-6 md:px-16 font-outfit">
      {/* Services Section */}
      <div className="mb-3">
        <h2 className="text-6xl md:text-6xl font-bold mb-10 text-left">Our Services</h2>
        
        {/* Service Item */}
        <div className="border-t border-white py-6 pt-20 group relative overflow-hidden">
  {/* Graphic Design Heading */}
  <h3 className="text-4xl text-[#BBBBBB] font-medium text-left cursor-pointer transition-transform duration-100 group-hover:translate-y-[-5px]">
    Graphic Design
  </h3>

  {/* Tags */}
  <div className="flex flex-wrap gap-3 mt-2 justify-end ml-24 transition-transform duration-1000 group-hover:translate-y-[-5px]">
    <button className="px-3 py-2 h-10 border rounded-full">Event Branding</button>
    <button className="px-3 py-2 h-10 border rounded-full">Marketing Design</button>
    <button className="px-3 py-2 h-10 border rounded-full">Promotional Materials</button>
    <button className="px-3 py-2 h-10 border rounded-full">Graphic Design</button>
  </div>

  {/* Hidden Section - Revealed on Hover */}
  <div className="max-h-0 opacity-0 group-hover:max-h-screen group-hover:opacity-100 transition-all duration-1200 ease-in-out overflow-hidden">
    <div className="border-t border-white py-6 flex flex-col md:flex-row md:items-center gap-4">
      <img src={work_frame1} alt="Illustration" className="w-64 h-52 object-cover rounded-md" />

      <div>
        <h3 className="text-5xl font-semibold text-start mt-6 md:mt-20">Illustration</h3>
        <div className="flex flex-wrap gap-3 mt-6 md:mt-20 justify-end ml-10 md:ml-64">
          <button className="px-3 py-2 border h-10 rounded-full">Custom Illustrations</button>
          <button className="px-3 py-2 border h-10 rounded-full">Brand Identity</button>
          <button className="px-3 py-2 border h-10 rounded-full">Design Mockups</button>
          <button className="px-3 py-2 border h-10 rounded-full">Product Design</button>
        </div>
      </div>
    </div>
  </div>
</div>

        
        {/* Illustration Section */}
        {/* <div className="border-t border-white py-6 flex flex-col md:flex-row  md:items-center gap-4">
          <img src={work_frame1}  alt="Illustration" className="w-64 h-52 object-cover rounded-md" />
                
          <div className=''>  
          <h3 className="text-5xl font-semibold text-start mt-20">Illustration</h3> 
            <div className="flex flex-wrap gap-3 mt-20 justify-end ml-64">
              <span className="px-3 py-2 border h-10 rounded-full">Custom Illustrations</span>
              <span className="px-3 py-2 border h-10 rounded-full">Brand Identity</span>
              <span className="px-3 py-2 border h-10 rounded-full">Design Mockups</span>
              <span className="px-3 py-2 border h-10 rounded-full">Product Design</span>
            </div>
          </div>
        </div> */}
        <div className="border-t border-white py-6 flex flex-col md:flex-row  md:items-center gap-4">
          <img src={D_Visuals}  alt="Illustration" className=" object-cover rounded-md" />
                
          <div className=''>  
            <div className="flex flex-wrap gap-3 mt-20 justify-end ml-64">
              <button className="px-3 py-2 border h-10 rounded-full">Product Design</button>
              <button className="px-3 py-2 border h-10 rounded-full">Product Design</button>
              <button className="px-3 py-2 border h-10 rounded-full">Product Design</button>
              <button className="px-3 py-2 border h-10 rounded-full">Product Design</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-white py-6 flex flex-col items-center relative">
  {/* Stars */}
  <div className='flex '>
  <span className="absolute top-16 right-12 text-white  text-5xl"><TbNorthStar /></span>
  <span className="absolute top-16 -right-0 text-white text-5xl"><TbNorthStar /></span>
  </div>
   
  <span className="absolute bottom-32 left-10 text-white text-5xl"><TbNorthStar /></span>
  <span className="absolute bottom-32 -left-2 text-white text-5xl"><TbNorthStar /></span>

  {/* Image Section */}
  <div className="relative  ">
    {/* Title */}
    <h2 className="absolute top-10 left-[-300px] !text-7xl font-medium text-9xl md:text-4xl font-bold text-white">
      Our Work
    </h2>

    {/* Image */}
    <img
      src={work_frame2}
      alt="Work"
      className="w-full md:w-[500px] object-cover rounded-md mx-auto mt-10 ml-10"
    />

    {/* Work Categories */}
    <ul className="absolute  font-medium top-1/2 right-[-270px] bottom-1/2 transform -translate-y-1/2 text-lg font-medium space-y-6 text-left">
      <li className='text-3xl '>Graphic Design</li>
      <li className='text-3xl'>UI/UX Design</li>
      <li className='text-3xl'>Illustration</li>
      <li className='text-3xl'>Branding</li>
      <li className='text-3xl'>More+</li>
    </ul>
  </div>
</div>

</section>
<div className="bg-[#F3F5FC] flex flex-col items-center px-6 py-12 relative">
      <div className="flex items-start justify-between w-full">
        <h2 className="text-7xl font-medium text-gray-900 ml-0 whitespace-nowrap">
          What Our Clients Say
        </h2>

        <div className="flex gap-4 absolute top-6 right-6">
          <button
            onClick={handlePrev}
            className={`flex items-center justify-center border-2 rounded-full transition-all duration-300 ${
              activeButton === "left"
                ? "w-24 h-24 border-gray-900 text-gray-900 bg-gray-200"
                : "w-20 h-20 border-gray-400 text-gray-400 hover:bg-gray-200"
            }`}
          >
            <FaArrowLeft  />
          </button>

          <button
            onClick={handleNext}
            className={`flex items-center justify-center border-2 rounded-full transition-all duration-300 ${
              activeButton === "right"
                ? "w-20 h-20 border-gray-900 text-gray-900 bg-gray-200"
                : "w-16 h-16 border-gray-400 text-gray-400 hover:bg-gray-200"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="max-w-4xl w-full text-left ml-60 mt-4">
        {/* Pagination (01-05) */}
        <span className="text-gray-400 text-xl absolute left-10 top-52 ">
          ({String(currentIndex + 1).padStart(2, "0")}-{testimonials.length})
        </span>

        {/* Testimonial */}
        <p className="text-4xl  text-gray-700 leading-relaxed mt-14">
          “{testimonials[currentIndex].text}”
        </p>

        {/* User Profile */}
        <div className="flex items-center mt-4 gap-4">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
          </div>
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex gap-2 mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-sm transition-all duration-300 ${
                currentIndex === index ? "w-4 bg-gray-700" : "w-2 bg-gray-400"
              }`}
            ></span>
          ))}
        </div> */}
      </div>
    </div>

      </header>
      <Footers />
    </div>
  );
}

export default Header;
    