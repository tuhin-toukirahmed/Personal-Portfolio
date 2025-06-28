import React from 'react';

const Container = ({ children, className = "" }) => {
 return (
  <div className={`
    w-full 
    max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl
    min-w-0
    mx-auto 
    px-4 sm:px-6 lg:px-8 xl:px-12
    ${className}
  `}>
   {children}
  </div>
 );
};

export default Container;