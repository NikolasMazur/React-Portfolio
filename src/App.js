import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav"
import Project from "./components/Project";
import Footer from "./components/Footer";

// const App = () => <Project />;

function App() {
    return(
        <div>
            <Header />
            <Nav />
            <Project />
            <Footer />
        </div>
    )
};

export default App;