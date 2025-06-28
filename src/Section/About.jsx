import React from 'react';
import Container from '../Components/Container';

const About = () => {
  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '39+', label: 'Projects Completed' },
    { number: '5+', label: 'Happy Clients' },
    { number: '95%', label: 'Success Rate' }
  ];

  const expertise = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with modern frameworks and best practices.',
      technologies: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend Integration',
      description: 'Seamless API integration and database management for full-stack solutions.',
      technologies: ['Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-centered designs that balance aesthetics with functionality.',
      technologies: ['Figma', 'Responsive Design', 'User Research']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate frontend developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            
            {/* Personal Story */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Toukir Tuhin, a passionate frontend developer with a keen eye for detail and a love for creating seamless user experiences. My journey in web development started with curiosity and has evolved into a professional pursuit of excellence.
                </p>
                
                <p>
                  Over the years, I've had the privilege of working on diverse projects, from small business websites to complex web applications. Each project has taught me something new and reinforced my commitment to writing clean, efficient code.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring the latest web technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of industry trends.
                </p>
              </div>

              {/* Personal Interests */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Beyond Code</h4>
                <div className="flex flex-wrap gap-2">
                  {['Open Source', 'Tech Blogging', 'UI Design', 'Problem Solving', 'Team Collaboration'].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm border border-gray-600"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills & Stats */}
            <div className="space-y-8">
              
              {/* Stats */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                  By the Numbers
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm sm:text-base text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What Drives Me</h4>
                <div className="space-y-3">
                  {[
                    { icon: '🎯', text: 'Delivering pixel-perfect, responsive designs' },
                    { icon: '⚡', text: 'Optimizing performance and user experience' },
                    { icon: '🤝', text: 'Building strong client relationships' },
                    { icon: '📚', text: 'Staying updated with latest technologies' }
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <span className="text-xl">{value.icon}</span>
                      <span>{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-12">
              Areas of Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <div 
                  key={index} 
                  className="relative bg-gray-700/30 p-6 rounded-lg border-2 border-gray-600 transition-all duration-300 group hover:border-transparent"
                >
                  {/* Animated Border Only */}
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse -z-10"></div>
                  
                  {/* Card Content */}
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {area.title}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:text-blue-300 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
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

export default About;