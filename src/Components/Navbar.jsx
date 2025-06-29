import React, { useState } from 'react';
import Container from './Container';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Add your resume download logic here
    console.log('Downloading resume...');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20" role="navigation" aria-label="Main navigation">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl lg:text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200 rounded-lg px-2 py-1 cursor-pointer"
              aria-label="Go to home section"
            >
              <img 
                src="https://i.postimg.cc/MK8m7KBW/rsz-1chatgpt-image-jun-29-2025-04-35-50-pm-removebg-preview.png" 
                alt="Logo" 
                className="h-8 w-auto lg:h-10"
              />
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 cursor-pointer
                  ${activeSection === item.id 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                  }
                `}
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Resume Button */}
          <div className="hidden md:flex flex-shrink-0">
            <button
              onClick={handleResumeDownload}
              className="
                px-4 lg:px-6 py-2 lg:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg 
                transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer
                text-sm lg:text-base
              "
              aria-label="Download resume"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button - Left side */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 cursor-pointer order-first"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Resume Button - Right side */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={handleResumeDownload}
              className="
                px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg 
                transition-all duration-200 shadow-lg cursor-pointer text-sm
              "
              aria-label="Download resume"
            >
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>CV</span>
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden py-4 border-t border-gray-700"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
                    ${activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                    }
                  `}
                  role="menuitem"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;