import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-left mt-60 max-sm:mt-20 text-7xl max-sm:text-5xl md:text-8xl font-bold mb-6 pb-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right flex flex-col">
            <p>Fatih</p>
            <p>Bingöl</p>
          </h1>

          <div className="ml-5 my-10 flex justify-start space-x-6">
            <button className="button-2">Contact</button>
            <button className="button-2">Projects</button>
          </div>

          <div className="max-sm:justify-center justify-between flex">
            <ul className="flex max-sm:flex-col max-sm:justify-start justify-between space-x-5 w-full max-sm:text-left text-gray-400 text-xl space-y-3">
              <li>
                <a href="https://github.com/fthbng77" target="_blank" rel="noopener noreferrer">
                  <img src="https://raw.githubusercontent.com/fthbng77/my-portfolio/main/src/assets/github-mark-white.svg" alt="GitHub" className="inline-block w-6 h-6 mr-2" />
                  GitHub/fthbng77
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/fatih-bing%C3%B6l/" target="_blank" rel="noopener noreferrer">
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

          <div className="card max-w-lg md:max-w-175 mt-16 text-gray-400 text-justify">
            <p>
              I am <strong>Muhammet Fatih Bingöl</strong>, a third-year Computer Engineering student at Istanbul University-Cerrahpaşa. My passion for artificial intelligence and robotics led me to explore autonomous systems and deep learning technologies.
            </p>

            <p className="mt-4">
              Over the course of my academic journey, I’ve taken on software development and leadership roles in various projects. My work in AI and robotics has led to real-world applications, including finalist recognition at TEKNOFEST Entrepreneurship and International UAV Competitions. These experiences have sharpened my innovation, problem-solving, and team collaboration skills.
            </p>

            <h3 className="text-white font-bold mt-6">Gökmen-PG</h3>
            <p>
              A deep learning-based autonomous rotary-wing aerial vehicle system designed for environments where GNSS signals are unavailable. It integrates segmentation, object detection, visual SLAM, and depth estimation using a monocular camera.
            </p>

            <h3 className="text-white font-bold mt-4">Smart Web System</h3>
            <p>
              A web-based drone control API enabling real-time telemetry, positioning, and video streaming. Users can interact with autonomous systems over the internet without retraining models, applicable in rescue, agriculture, and security domains.
            </p>

            <h3 className="text-white font-bold mt-4">Autonomous Ground Vehicle for Agriculture</h3>
            <p>
              This vehicle detects and localizes weeds autonomously using deep learning techniques, enabling efficient unmanned soil treatment and crop protection.
            </p>

            <h3 className="text-white font-bold mt-4">Prometheus</h3>
            <p>
              A computer vision model for aerial vehicles that performs real-time object detection and pose estimation, enabling reliable in-flight navigation and scene understanding.
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
