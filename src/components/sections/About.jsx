import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const roboticsSkills = [
    "ROS/ROS2",
    "Visual & LiDAR SLAM",
    "RGB-D & Stereo Camera",
    "4D Imaging Radar",
    "Object Detection",
    "Tracking & Re-ID",
    "Monocular Visual SLAM",
    "IMU Integration",
    "VIO (Visual Inertial Odometry)",
    "MAVROS & Pymavlink",
    "Drone Telemetry & GNSS-Denied Nav"
  ];

  const programmingSkills = [
    "Python",
    "C++",
    "Java",
    "Deep Learning",
    "Linux (Ubuntu)",
    "NVIDIA Jetson & Tools"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="card">
            <p className="text-gray-300 mb-6">
              I'm a passionate robotics software developer with hands-on experience in autonomous navigation, visual SLAM, and drone systems in GNSS-denied environments. I specialize in real-time deep learning applications for aerial and ground robotics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Robotic Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {roboticsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Engineering</strong> – Istanbul University - Cerrahpasa (2021–2026)
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">GÖKMEN Havacılık ve Yazılım A.Ş. (2023–2024)</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Developed autonomous navigation software in GNSS-denied environments using deep learning.</li>
                    <li>Designed object detection, segmentation, and depth estimation systems.</li>
                    <li>Built Visual SLAM and UAV autopilot integrations with ROS and MAVLink.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">INARI – Industrial Drones (Intern, 2025)</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Developed a vision and LiDAR-based odometry system for UAVs in GNSS-denied industrial environments.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Xena Vision Yazılım Savunma A.Ş. (Researcher, 2025)</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Worked on security-oriented object detection, tracking, and re-identification using 4D radar and camera fusion.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-8">
            <h3 className="text-xl font-bold mb-4">📁 Selected Projects</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <strong>Smart Web System – Drone Management API:</strong> Real-time drone telemetry, positioning, and video streaming using ROS and MAVLink.
              </li>
              <li>
                <strong>Gökmen-PG:</strong> Vision-based UAV navigation system with segmentation, object detection, and Visual SLAM.
              </li>
              <li>
                <strong>Path Rover:</strong> Autonomous ground robot for weed detection and localization.
              </li>

              <li>
                <strong>TÜBİTAK 2209-A:</strong> Robust VIO system combining SuperPoint with IMU data for stable pose estimation.
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
