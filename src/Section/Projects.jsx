import React from 'react';
import Container from '../Components/Container';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management. Features responsive design and dark mode support.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Chart.js", "Firebase", "React Router"],
      liveLink: "https://ecommerce-dashboard-demo.netlify.app",
      githubLink: "https://github.com/yourusername/ecommerce-dashboard",
      featured: true
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description: "A modern web application for tracking personal expenses and income with interactive charts, budget planning, and financial goal setting features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "DaisyUI", "Local Storage", "Recharts"],
      liveLink: "https://finance-tracker-app.netlify.app",
      githubLink: "https://github.com/yourusername/finance-tracker",
      featured: true
    },
    {
      id: 3,
      title: "Weather App",
      description: "Clean and intuitive weather application with location-based forecasts, interactive maps, and detailed weather information with smooth animations.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenWeather API", "Geolocation", "CSS3"],
      liveLink: "https://weather-app-react.netlify.app",
      githubLink: "https://github.com/yourusername/weather-app",
      featured: false
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and progress tracking capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "React DnD", "Context API", "Local Storage"],
      liveLink: "https://task-manager-pro.netlify.app",
      githubLink: "https://github.com/yourusername/task-manager",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This responsive portfolio website built with modern React and Tailwind CSS, featuring dark mode, smooth animations, and optimized performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Vite"],
      liveLink: "https://toukir-portfolio.netlify.app",
      githubLink: "https://github.com/yourusername/portfolio",
      featured: false
    }
  ];

  const featuredOnly = featuredProjects.filter(project => project.featured);
  const otherProjects = featuredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-charcoal-800 relative">
      <Container>
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-charcoal-300 max-w-2xl mx-auto">
              Showcasing my passion for creating innovative web solutions with modern technologies
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Work</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredOnly.map((project) => (
                <div
                  key={project.id}
                  className="group bg-charcoal-700 rounded-xl overflow-hidden border border-charcoal-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.01]"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-charcoal-600 h-48 sm:h-56">
                    <div className="absolute inset-0 bg-accent-500/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-accent-500/30">
                          <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <p className="text-accent-300 text-sm font-medium">Project Preview</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-charcoal-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-accent-500 hover:bg-accent-600 text-blue-400 px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-charcoal-600 hover:bg-charcoal-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-center flex items-center justify-center gap-2 border border-charcoal-500 group-hover:border-blue-500"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-charcoal-700 rounded-xl overflow-hidden border border-charcoal-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  {/* Project Image - Smaller for grid items */}
                  <div className="relative overflow-hidden bg-charcoal-600 h-40">
                    <div className="absolute inset-0 bg-accent-500/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 border border-accent-500/30">
                          <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <p className="text-accent-300 text-xs font-medium">Preview</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-charcoal-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies - Compact */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-charcoal-600 text-charcoal-300 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons - Compact */}
                    <div className="flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-accent-500 hover:border-blue-500 text-blue-400 px-3 py-2 rounded text-sm font-medium transition-colors duration-300 text-center flex items-center justify-center gap-1"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-charcoal-600 hover:bg-charcoal-500 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-300 text-center flex items-center justify-center gap-1 border border-charcoal-500 group-hover:border-blue-500"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </Container>
    </section>
  );
};

export default Projects;
