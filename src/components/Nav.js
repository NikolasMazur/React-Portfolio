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
              onSubmit={() => handlePageChange('Project')}
              className={currentPage === 'Project' ? 'nav-link active' : 'links'}
              >Development
            </a>
        </li>
        <br />
        <li><a 
              href="#contact"
              onSubmit={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'links'}
              >Contact
            </a>
        </li>
        <br />
        <li><a 
              href="#resume"
              onSubmit={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'links'}
              >Resume
            </a>
        </li>
        <br />
        <li><a 
              href="#about"
              onSubmit={() => handlePageChange('About')}
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