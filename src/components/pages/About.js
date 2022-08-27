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
            <p className="paragraph"> 
              a full-stack web developer located in Lander, Wyoming. I am a recent 
              University of Washington full stack web development bootcamp 
              graduate with experience in IT support. Additionally, I've received 
              various certifications in varous languages including HTML, CSS, SQL, 
              Python, and MongoDB.
              <br />
              <br />
              From 2021 to 2022 I was employed by Falcon Trading Systems as a 
              systems technician. From 2017 to 2019 I was a student at Central 
              Wyoming College studying film, my time there fostered my love of the 
              visual arts leading to making various short films with friends and 
              former classmates.
            </p>
          </section>
        </div>
    );
}