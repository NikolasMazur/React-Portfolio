// import Nav from '../Nav';
import { NavLink } from "react-router-dom";
import resume from '../../assets/pdf/resume.pdf'

// const style = {
//   Content: {
//     textAlign: "center",
//     marginTop: "5%",
//     fontSize: "2em"
//   },
//   Competencies: {
//     fontSize: "1em",
//     textAlign: "center",
//     lineHeight: "170%",
//     marginTop: "1%",
//   }
// };

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
                    been working as a backend python developer for a resource management 
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
                      HTML
                    </li>
                    <li>
                      CSS
                    </li>
                    <li>
                      JavaScript
                    </li>
                    <li>
                      React
                    </li>
                    <li>
                      NodeJS
                    </li>
                    <li>
                      Express
                    </li>
                    <li>
                      SQL
                    </li>
                    <li>
                      MongoDB
                    </li>
                    <li>
                      Python
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