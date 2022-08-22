import React from 'react'

const Layout = ({ children }) => {
  return (
    <div data-theme="light" className='h-screen'> 
        {children}
    </div>
  );
};

export default Layout