import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "ROS/ROS2",
    "OpenCV",
    "TensorFlow",
    "PyTorch",
    "Gazebo",
    "Linux",
    "Docker",
    "SLAM",
    "Image Processing",
    "Raspberry Pi",
    "NVIDIA Jetson",
    "RGB-D Camera",
    "Stereo Camera",
    "Lidar"
  ];

  const otherTechnologies = [
    "Python",
    "C++",
    "C#",
    "Java",
    "JavaScript"
];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="card">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Robotic Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {otherTechnologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Engineering </strong> - Istanbul
                  University - Cerrahpasa (2021-2026)
                </li>
              </ul>
            </div>
            <div className="card">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold"> Gökmen UAV Team (2022 - 2024) </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Developed <strong>PGNet</strong>, a unique classifier segmentation neural network model for wild forests.</li>
                      <li>Implemented an <strong>object detection neural network model</strong> and an <strong>avoidance control algorithm</strong> for autonomous navigation.</li>
                      <li>Designed and optimized <strong>depth estimation</strong> and <strong>visual SLAM algorithms</strong> using a monocular camera.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold"> INARI - Industrial Drones (Long-Term Intern) </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Worked on <strong>image processing algorithms</strong> for a rotary-wing UAV performing maintenance and repairs in GNSS-denied environments within the shipbuilding industry.</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
