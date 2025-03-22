import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your GitHub username and manually set pinned repositories
  const githubUsername = "fthbng77";
  
  // List of repositories that you want to display as pinned
  const pinnedRepos = [
    "gps-denied", // Replace with actual repo names
    "Websocket_with_Ros",
    "Rover_PR",
    "RoadNet",
    "evolving-simple-organisms",
    "ros2_tutorials_uav"
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoPromises = pinnedRepos.map((repoName) =>
          fetch(`https://api.github.com/repos/${githubUsername}/${repoName}`)
        );
        
        // Wait for all repo data to be fetched
        const responses = await Promise.all(repoPromises);

        // Check if all responses are successful
        const validResponses = responses.filter((response) => response.ok);
        
        if (validResponses.length !== pinnedRepos.length) {
          throw new Error("Some repositories failed to load");
        }

        const repoData = await Promise.all(validResponses.map((res) => res.json()));

        setRepos(repoData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  if (loading) {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="text-center text-gray-300">Loading repositories...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="text-center text-red-500">{error}</div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-row justify-center text-center">
            <h2 className="flex text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Projects/<img className=" pb-2 px-1 opacity-95 h-10" src="/src/assets/github-mark-white.svg" alt="" /><span className="text-white">Github</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="card rounded-xl p-6 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                <p className="text-gray-300 mb-4">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span className="mr-4">
                    <span role="img" aria-label="star">
                      ⭐
                    </span>{" "}
                    {repo.stargazers_count}
                  </span>
                  <span>
                    <span role="img" aria-label="fork">
                      🌀
                    </span>{" "}
                    {repo.forks_count}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full">
                    {repo.language || "Unknown"}
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
