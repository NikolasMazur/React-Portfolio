import React, { useState } from 'react';
import Nav from './Nav';
import Project from './pages/Project';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => {
    console.log(page)
    setCurrentPage(page);
  }

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
