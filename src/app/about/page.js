import Link from "next/link"


function About() {
  return (
    <div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              About Us
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Rs Coding Community
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever coding bootcamps, JavaScript frameworks, and backend technologies,
              RS Coding Community is the hub for learning and growth. You probably haven't
              heard of them: passionate developers working on cutting-edge projects,
              building portfolios, and mastering web technologies. Embrace the grind, collaborate,
              and code your way to success with RS Coding Community.

            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Empowering Coders
              </h2>
              <p className="leading-relaxed text-base mb-4">
                At RS Coding Community, we believe in creating opportunities for aspiring developers.
                From beginner-friendly tutorials to advanced coding challenges, we focus on hands-on learning,
                mentorship, and real-world projects to help coders grow.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                RS Coding Community
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Join a passionate group of developers, learning and collaborating on
                the latest technologies. Whether it's front-end frameworks or backend solutions,
                RS Coding Community is the place to level up your skills.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Visionaries
              </h2>
              <p className="leading-relaxed text-base mb-4">
                At RS Coding Community, we believe in pushing boundaries and exploring new horizons.
                Our members are not just developers; they are visionaries who are constantly thinking outside the box
                to craft innovative solutions that shape the future.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Trailblazers
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Our community is driven by individuals who lead by example. The Trailblazers of RS Coding Community
                constantly break new ground, setting trends in the tech industry and inspiring others to follow in their footsteps.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About