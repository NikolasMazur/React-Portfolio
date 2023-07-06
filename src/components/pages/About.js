import { NavLink } from "react-router-dom";
import resume from '../../assets/pdf/resume.pdf'

export default function About() {
    return (
        <div>
          <section id="about-me">
            <div className='about-me-container'>
                <div className='about-me-content'>
                  <h1 className='title'>
                    Hey; I'm Nikolas Mazur,
                  </h1>
                  <p className="paragraph"> 
                    A <NavLink className='underline' to='/Project'>full-stack web developer</NavLink> 
                    &nbsp;currently calling Lander, Wyoming&nbsp;
                    <NavLink className='underline' to='/react-portfolio'>home</NavLink>. 
                    I am a recent University of Washington full stack web development 
                    bootcamp graduate with experience in IT support. More recently I've 
                    been working as a back-end Python developer for a resource management 
                    software. Additionally, I've received various certifications in varous 
                    languages including JavaScript, CSS, SQL, Python, and MongoDB.
                    <br />
                    From 2021 to 2022 I was employed by Falcon Trading Systems as a 
                    systems technician. From 2017 to 2019 I was a student at Central 
                    Wyoming College studying film, my time there fostered my love of the 
                    visual arts leading to making various short films with friends and 
                    former classmates.
                  </p>
                  <br />
                  <br />
                  <h2 className='technical'>Technical Competencies</h2>
                  <ul className='competencies'>
                    <li>
                    Full Stack Web Development &#8211; (HTML, CSS, WordPress)
                    </li>
                    <li>
                    Functional Programming
                    </li>
                    <li>
                    JavaScript &#8211; (Node.js, React, Express)
                    </li>
                    <li>
                    Python &#8211; (Flask, Jinja2)
                    </li>
                    <li>
                    MongoDB
                    </li>
                    <li>
                    SQL &#8211; (MySQL, PostgreSQL)
                    </li>
                    <li>
                    Git
                    </li>
                    <li>
                    Windows
                    </li>
                    <li>
                    Linux
                    </li>
                    <br />
                    <br />
                    <li>
                    <h4><a className='underline' href={resume} target="_blank">Work History</a></h4>
                    </li>
                  </ul>
                </div>
            </div>
          </section>
        </div>
    );
}