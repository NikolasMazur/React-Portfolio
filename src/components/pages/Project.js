import React from 'react';
import MainProject from '../../assets/images/pocket-monster.png'
import SmallOne from '../../assets/images/day-scheduler.png'
import SmallTwo from '../../assets/images/inquirer.PNG'
import SmallThree from '../../assets/images/social-network-api.png'
import MediumOne from '../../assets/images/jate.png'
import MediumTwo from '../../assets/images/busy-parents-dashboard.png'

function Project() {
    return (
        <div>
          <main>
            {/* <!-- Main Project --> */}
            {/* <section id="main-project"> */}
            <section className="project-card">
              <header className="flex"><a href="https://areitan.github.io/PocketMonster/" target="_blank">Pocket Monster</a></header>
                <a href="https://areitan.github.io/PocketMonster/" target="_blank"><img src={MainProject} alt="PocketMonster landing page." /></a>
                <h4 className="repository">
                  <a href="https://github.com/areitan/PocketMonster" target="_blank">Repository</a>
                  <br />
                  Created with: HTML, CSS/Tailwind, JavaScript, Open 5E/goQR APIs
                </h4>
            </section>
            {/* <!-- Project 2 --> */}
            <section className="project-card">
              <header className="flex"><a href="https://nikolasmazur.github.io/day-schedule/" target="_blank">Day Scheduler</a></header>
                <a href="https://nikolasmazur.github.io/day-schedule/" target="_blank"><img src={SmallOne} alt="Day Scheduler web application." /></a>
                <h4 className="repository">
                  <a href="https://github.com/NikolasMazur/day-schedule" target="_blank">Repository</a>
                  <br />
                  Created with: HTML, CSS, JavaScript
                  </h4>
            </section>
            {/* <!-- Project 3 --> */}
            <section className="project-card">
              <header className="flex"><a href="https://github.com/NikolasMazur/Command-Line-Employee-Tracker" target="_blank">Employee Tracker</a></header>
                <a href="https://github.com/NikolasMazur/Command-Line-Employee-Tracker" target="_blank"><img src={SmallTwo} alt="Command Line Employee Tracker." /></a>
                <h4 className="repository">
                  <a href="https://github.com/NikolasMazur/Command-Line-Employee-Tracker" target="_blank">Repository</a>
                  <br />
                  Created with: JavaScript, NodeJS, InquirerJS
                  </h4>
            </section>
            {/* <!-- Project 4 --> */}
            <section className="project-card">
              <header className="flex"><a href="https://github.com/NikolasMazur/MongoDB-Social-Network-API" target="_blank">MongoDB API</a></header>
                <a href="https://github.com/NikolasMazur/MongoDB-Social-Network-API" target="_blank"><img src={SmallThree} alt="MongoDB Social Network API" /></a>
                <h4 className="repository">
                  <a href="https://github.com/NikolasMazur/MongoDB-Social-Network-API" target="_blank">Repository</a>
                  <br />
                  Created with: JavaScript, NodeJS, MongoDB, Mongoose
                </h4>
            </section>
            {/* <!-- Project 5 --> */}
            <section className="project-card">
              <header className="flex"><a href="https://github.com/NikolasMazur/Text-Editor" target="_blank">Text Editor</a></header>
                <a href="https://github.com/NikolasMazur/Text-Editor" target="_blank"><img src={MediumOne} alt="No current photo" /></a>
                <h4 className="repository">
                  <a href="https://nm-text-editor.herokuapp.com/" target="_blank">Repository</a>
                  <br />
                  Created with: JavaScript, NodeJS, Webpack, Bable
                </h4>
            </section>
            {/* <!-- Project 6 --> */}
            <section className="project-card">
              <header className="flex"><a href="https://busy-parents-jesse.herokuapp.com/" target="_blank">Busy Parents</a></header>
                <a href="https://busy-parents-jesse.herokuapp.com/" target="_blank"><img src={MediumTwo} alt="Random Password Generator web application" /></a>
                <h4 className="repository">
                  <a href="https://github.com/crumwj22/busy-parents" target="_blank">Repository</a>
                  <br />
                  Created with: NodeJS, Handlebars, mySQL, Animate.css
                </h4>
            </section>
          </main>
        </div>
    )
};

export default Project;