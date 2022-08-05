import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav"
import Project from "./components/Project";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";
import About from "./components/pages/About";

// const App = () => <Project />;

function App() {
    return(
        <div>
            <Nav />
            <Header />
            {/* <PortfolioContainer /> */}
            <Project />
            <About />
            <Footer />
        </div>
    )
};

export default App;