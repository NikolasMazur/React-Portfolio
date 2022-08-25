import React from 'react';

function Nav({currentPage, handlePageChange}) {
  // const handlePageChange = (page) => {
  //   console.log(page)
  //   // setCurrentPage(page);
  // }
  return (
    <div>
    <nav className="links nav-link">
      <ul className="navigation">
        <li><a 
              href="#project"
              onClick={() => handlePageChange('Project')}
              className={currentPage === 'Project' ? 'nav-link active' : 'links'}
              >Development
            </a>
        </li>
        <br />
        {/* <li><a 
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'links'}
              >Contact
            </a>
        </li>
        <br /> */}
        <li><a 
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'links'}
              >Resume
            </a>
        </li>
        <br />
        <li><a 
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'links'}
              >About
            </a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Nav;