import React from 'react';
import { NavLink } from "react-router-dom";

export default function Homepage() {
    return (
      <div className='big-ol-container'>
        <div className="homepage">
            <span id='name'><NavLink to='/about'>Nikolas Mazur</NavLink></span>
            <br />
            <span id='profession'><NavLink id='developer' to='/project'>Web Developer</NavLink></span>
        </div>
      </div>
    );
}