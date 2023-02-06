import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from './components/pages/Homepage'
import Project from './components/pages/Project'
import About from './components/pages/About'
import Resume from './components/pages/Resume'

// const App = () => <Project />;

function App() {
    return(
        <div>
            <BrowserRouter>
                {/* <Homepage /> */}
                <Routes>
                    <Route exact path='/React-Portfolio' element={<Homepage />} />
                    <Route path='/Project' element={<Project />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Resume' element={<Resume />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;