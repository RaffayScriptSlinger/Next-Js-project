
import About from "./about/page";
import Hero from "./components/Hero";
import Contact from "./Contact/page";
import Courses from "./Courses/page";


export default function Home() {
  return (
    <div >
      <div>
      <Hero />
      <About/>
      <Courses/>
      <Contact/>
     </div>
    </div>
  );
}
