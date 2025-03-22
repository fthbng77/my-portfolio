import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className=" text-left mt-60 max-sm:mt-20  text-7xl max-sm:text-5xl md:text-8xl font-bold mb-6 pb-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right flex flex-col">
            <p>Fatih</p>
            <p>Bingöl</p>
          </h1>

          <div className="ml-5 my-10 flex justify-start space-x-6">
            <button className=" button-2">Contact</button>
            <button className="button-2">Projects</button>
          </div>

          <div className=" max-sm:justify-center justify-between flex">
            <ul className="flex max-sm:flex-col max-sm:justify-start justify-between space-x-5 w-full max-sm:text-left text-gray-400 text-xl space-y-3">
              <li>
                <a href="https://github.com/fthbng77" target="_blank" rel="noopener noreferrer">
                  <img src="https://raw.githubusercontent.com/fthbng77/my-portfolio/main/src/assets/github-mark-white.svg" alt="GitHub" className="inline-block w-6 h-6 mr-2" />
                  GitHub/fthbng77
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/fatih-bing%C3%B6l-1372b5222/" target="_blank" rel="noopener noreferrer">
                  <img src="https://raw.githubusercontent.com/fthbng77/my-portfolio/main/src/assets/linkedin.png" alt="LinkedIn" className="inline-block w-6 h-6 mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com/fatihbing00" target="_blank" rel="noopener noreferrer">
                  <img src="https://raw.githubusercontent.com/fthbng77/my-portfolio/main/src/assets/Instagram.png" alt="Instagram" className="inline-block w-6 h-6 mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="card max-w-lg md:max-w-175 mt-55 text-gray-400 text-justify">
            <p>
              I am Muhammet Fatih Bingöl, a third-year Computer Engineering student at Istanbul University-Cerrahpaşa. My interest in artificial intelligence and robotic systems is one of the main reasons I chose to pursue computer engineering.
            </p>

            <p>
              Throughout my university life, I have successfully undertaken roles in software development and team leadership, which have helped me improve both my technical and communication skills. I have gained practical experience by working on projects focused on artificial intelligence, robotics, and autonomous systems. The experience I gained from these projects enabled me to become a finalist in the Teknofest Entrepreneurship Competition - Acceleration Category and the International Unmanned Aerial Vehicle Competitions. These achievements have strengthened my innovative thinking, teamwork, and problem-solving skills. Below, I would like to share details about some of the projects I have worked on.</p>

            <h3 className="text-white font-bold mt-4">Gökmen-PG:</h3>
            <p>
              Gökmen-PG is my rotary-wing aerial vehicle project with real-time autonomous navigation capabilities based on deep learning methods, designed for non-human environments or indoor/outdoor areas where GNSS satellite signals are inaccessible.
            </p>

            <h3 className="text-white font-bold mt-4">Smart Web System:</h3>
            <p>
              I developed a web-based API that allows users to manage, control, and monitor robotic operations via the internet. This system enables users to utilize AI models without needing to train them. It can be used in various fields such as search and rescue operations, agriculture, security, and surveillance.
            </p>

            <h3 className="text-white font-bold mt-4">Autonomous Ground Vehicle for Agriculture:</h3>
            <p>
              With the deep learning model I developed, our ground vehicle can autonomously detect and locate weeds, allowing for efficient soil cultivation without human intervention.
            </p>

            <h3 className="text-white font-bold mt-4">Prometheus:</h3>
            <p>
              A computer vision algorithm we developed for aerial vehicles. This model enables our aircraft to perform position estimation and object detection while in motion.
            </p>
          </div>


        </div>

        <div className="py-5"></div>
        <div className="flex justify-center">
          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
  