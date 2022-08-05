import React from 'react';

export default function Project() {
    return (
        <div>
          <main>
            {/* <!-- Main Project --> */}
            <section id="main-project">
              <header class="flex"><a href="https://areitan.github.io/PocketMonster/" target="_blank">PocketMonster</a></header>
              <a href="https://areitan.github.io/PocketMonster/" target="_blank"><img src="./assets/images/pocket-monster.png" alt="PocketMonster landing page." /></a>
              <h4 class="repository">
                <a href="https://github.com/areitan/PocketMonster" target="_blank">Repository</a>
                <br />
                Created with: HTML, CSS/Tailwind, JavaScript, Open 5E/goQR APIs
              </h4>
            </section>
            {/* <!-- Project 2 --> */}
            <section class="project-card">
              <header class="flex"><a href="https://nikolasmazur.github.io/day-schedule/" target="_blank">Day Scheduler</a></header>
              <a href="https://nikolasmazur.github.io/day-schedule/" target="_blank"><img src="./assets/images/day-scheduler.png" alt="Day Scheduler web application." /></a>
              <h4 class="repository">
                <a href="https://github.com/NikolasMazur/day-schedule" target="_blank">Repository</a>
                <br />
                Created with: HTML, CSS, JavaScript
                </h4>
            </section>
            {/* <!-- Project 3 --> */}
            <section class="project-card">
              <header class="flex"><a href="https://github.com/NikolasMazur/Command-Line-Employee-Tracker" target="_blank">Employee Tracker</a></header>
              <a href="https://github.com/NikolasMazur/Command-Line-Employee-Tracker" target="_blank"><img src="./assets/images/inquirer.PNG" alt="Command Line Employee Tracker." /></a>
              <h4 class="repository">
                <a href="https://github.com/NikolasMazur/Command-Line-Employee-Tracker" target="_blank">Repository</a>
                <br />
                Created with: JavaScript, NodeJS, InquirerJS
                </h4>
            </section>
            {/* <!-- Project 4 --> */}
            <section class="project-card">
              <header class="flex"><a href="https://nikolasmazur.github.io/password-generator/" target="_blank">Password Generator</a></header>
              <a href="https://nikolasmazur.github.io/password-generator/" target="_blank"><img src="./assets/images/password-generator.png" alt="Random Password Generator web application" /></a>
              <h4 class="repository">
                <a href="https://github.com/NikolasMazur/password-generator" target="_blank">Repository</a>
                <br />
                Created with: HTML, CSS, JavaScript
                </h4>
            </section>
          </main>
        </div>
    )
}