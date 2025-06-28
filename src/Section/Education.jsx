import React from 'react';
import Container from '../Components/Container';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Business Administration (BBA)',
      major: 'Accounting',
      institution: 'Carmichael College',
      location: 'Rangpur, Bangladesh',
      period: '2024 - Present',
      year: '1st Year',
      status: 'Currently Pursuing',
      description: 'Building a strong foundation in business principles and accounting practices while developing analytical and problem-solving skills that complement my technical expertise.',
      highlights: [
        'Financial Analysis & Reporting',
        'Business Mathematics',
        'Principles of Accounting',
        'Business Communication'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Frontend Development',
      provider: 'Programming Hero',
      period: '2024 - Present',
      skills: ['React.js', 'JavaScript','Node.js', 'MongoDB','Next.js']
    },
    {
      title: 'Web Development Fundamentals',
      provider: 'Various Online Platforms',
      period: '2023 - 2024',
      skills: ['Responsive Design', 'Git/GitHub', 'HTML/CSS', 'Tailwind CSS' ]
    }
  ];

  const achievements = [
    {
      icon: '🎯',
      title: 'Academic Excellence',
      description: 'Maintaining strong academic performance while pursuing web development'
    },
    {
      icon: '💻',
      title: 'Self-Taught Developer',
      description: 'Successfully mastered frontend technologies through self-directed learning'
    },
    {
      icon: '⚡',
      title: 'Quick Learner',
      description: 'Rapidly adapting to new technologies and frameworks'
    },
    {
      icon: '🔄',
      title: 'Continuous Growth',
      description: 'Actively expanding skillset in both business and technology domains'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800 relative">
      <Container>
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Education & Learning
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Combining formal business education with self-directed technical learning 
              to bring a unique perspective to web development projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Formal Education */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
                  Formal Education
                </h3>
                
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-700/30 p-6 lg:p-8 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-400 font-medium mb-1">
                          Major: {edu.major}
                        </p>
                        <p className="text-gray-300 mb-2">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 mb-2">
                          {edu.status}
                        </span>
                        <p className="text-gray-400 text-sm">{edu.period}</p>
                        <p className="text-gray-400 text-sm font-medium">{edu.year}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className="text-white font-medium mb-3">Key Subjects:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm border border-gray-500"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Learning */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
                  Technical Learning
                </h3>
                
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-blue-400 font-medium">
                            {cert.provider}
                          </p>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 sm:mt-0">
                          {cert.period}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm border border-blue-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements & Learning Approach */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Learning Achievements
                </h3>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <h4 className="text-white font-medium mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Philosophy */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Learning Philosophy
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I believe in combining theoretical knowledge from formal education with practical, 
                  hands-on experience in technology. This dual approach gives me a unique perspective 
                  on problem-solving and business-oriented development.
                </p>
              </div>

              {/* Current Focus */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Current Focus
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Advanced React patterns and best practices
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Full-stack development with Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Business application development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;