import React from 'react';

function Nav(currentPage, handlePageChange) {
  return (
    <div>
    <nav className="links">
      <ul className="navigation">
        <li><a 
              href="#main-project"
              onClick={() => handlePageChange('Development')}
              className={currentPage === 'Development' ? 'nav-link active' : 'nav-link'}
              >Development</a></li>
        <li><a 
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >Contact</a></li>
        <li><a 
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >Resume</a></li>
        <li><a 
              href="#about-me"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >About</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Nav;