import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export function AboutPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-preview";

  return (
    <section className={`bg-gray-900 py-20 transition-colors duration-300`}>
      {isAboutPage && (
        <div className="flex justify-end max-w-7xl mx-auto px-6 mt-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="relative group inline-flex items-center gap-2 px-5 py-2 rounded-md border-2 border-pink-500 text-pink-400 text-sm font-semibold transition duration-300 ease-in-out hover:text-white hover:shadow-[0_0_12px_3px_rgba(255,105,180,0.6)] hover:bg-pink-500"
          >
            <span className="absolute -inset-1 rounded-md bg-gradient-to-r from-red-500 via-orange-400 to-blue-500 opacity-25 blur-sm group-hover:opacity-50 group-hover:blur-md transition-all duration-500"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="z-10">Go Back</span>
          </button>
        </div>
      )}
      <div className="container max-w-7xl mx-auto px-6 text-white">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4`}>
            <span className="text-yellow-400">About</span>{" "}
            <span className="text-orange-400">Me</span>
          </h2>
          <p className={`text-lg  max-w-2xl mx-auto`}>
            Learn more about my background, skills, and what drives me as a software engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 text-white lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className={`p-8 rounded-2xl border backdrop-blur-sm`}>
              <h3 className={`text-3xl font-bold mb-6`}>
                Hi, I'm <span className="text-pink-400">Lavudya Raja</span>
              </h3>
              <p className={`text-lg mb-6 leading-relaxed`}>
                I am passionate about building impactful, user-friendly web applications using modern frontend technologies like React.js,
                Next.js, and Tailwind CSS. I enjoy designing clean, responsive interfaces that provide a seamless user experience.
              </p>
              <p className={`text-lg mb-8 leading-relaxed`}>
                I also have a deep interest in machine learning and NLP. I’ve worked with tools like NumPy, Pandas, Scikit-learn,
                Seaborn, and NLTK to build intelligent models and analyze data.
              </p>
              <Link to="/about">
                <button className={`
                  inline-flex items-center space-x-3 px-6 py-3 rounded-lg font-medium
                  bg-gradient-to-r from-cyan-400/10 to-pink-400/10 
                  border border-cyan-400/30 text-cyan-400
                  transition-all duration-300
                  hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10
                `}>
                  <span>More About Me</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Experience */}
            <div className={`p-6 rounded-xl border backdrop-blur-sm hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 group`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <h4 className={`text-xl font-semibold`}>Experience</h4>
              </div>
              <ul className={`space-y-3`}>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400/60 rounded-full mr-3"></span>1 Year of Professional Experience</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400/60 rounded-full mr-3"></span>6 months of Team Leadership</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400/60 rounded-full mr-3"></span>Worked with 10+ Technologies</li>
              </ul>
            </div>

            {/* Education */}
            <div className={`p-6 rounded-xl border backdrop-blur-sm hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-400/10 group`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <h4 className={`text-xl font-semibold`}>Education</h4>
              </div>
              <ul className={`space-y-3`}>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400/60 rounded-full mr-3"></span>B.Tech in Computer Science</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400/60 rounded-full mr-3"></span>Various Tech Certifications</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className={`p-6 rounded-xl border backdrop-blur-sm hover:border-pink-400/30 hover:shadow-lg hover:shadow-pink-400/10 group`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-pink-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <h4 className={`text-xl font-semibold`}>Frontend</h4>
              </div>
              <ul className={`space-y-3`}>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400/60 rounded-full mr-3"></span>React / Next.js</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400/60 rounded-full mr-3"></span>TypeScript</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400/60 rounded-full mr-3"></span>Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div className={`p-6 rounded-xl border backdrop-blur-sm hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10 group`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                <h4 className={`text-xl font-semibold`}>Backend</h4>
              </div>
              <ul className={`space-y-3`}>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400/60 rounded-full mr-3"></span>Node.js</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400/60 rounded-full mr-3"></span>Express</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400/60 rounded-full mr-3"></span>SQL / NoSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
