import React from 'react';
// import Photo from '../../assets/images/IMG_3673.jpg'

export default function About() {
    return (
        <div>
         <header className="title">
          <h1>
            Hi,
            <br />
            I'm Nikolas Mazur,
          </h1>
         </header>
          <section id="about-me">
            {/* <img className="photo" src={Photo} alt="Out of date Nikolas picture" /> */}
            <p className="paragraph"> a developer currently located in Lander, Wyoming. I've received certifications in varous languages including HTML, CSS, SQL, Python, and MongoDB. Currently I'm enrolled in a full 
              stack development bootcamp to further my knowledge of web devlopment languages and technologies; namely HTML, CSS, and JavaScript.
              <br />
              From 2021 to 2022 I was employed by Falcon 
              Trading Systems as a systems technician. From 2017 to 2019 I was a student at Central Wyoming College studying film, my time there 
              fostered my love of the visual arts leading to making various short films with friends and former classmates.
            </p>
          </section>
        </div>
    );
}