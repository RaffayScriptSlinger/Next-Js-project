import Menu from "../Menu/page";
import AdminPage from "../adminPage/page";
import Link from "next/link";

function Hero() {
  return (
   <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       Welome To the   
        <br className="hidden lg:inline-block" />
         Rs Coding  Community

      </h1>
      <p className="mb-8 leading-relaxed">
      Join the Rs coding community, where creativity meets technology! Sip from a copper mug during coding sessions, carry your gear in an eco-friendly tote, and refresh with cold-pressed juice. Embrace trendy apparel and authentic tech gear as we transform ideas into reality together!


      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href = "/Courses">Courses</Link>
          
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            <Link href = "/about"> About Us</Link>
         
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <video
        className="object-cover object-center rounded"
        alt="hero"
        src="https://www.shutterstock.com/shutterstock/videos/1033204736/preview/stock-footage-closeup-coding-on-screen-man-hands-coding-html-and-programming-on-screen-laptop-development-web.webm"
        autoPlay
        loop
        muted
      />
    </div>
  </div>
</section>

   </div>
   
    
  );
}

export default Hero;
