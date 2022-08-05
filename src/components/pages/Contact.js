import React, { useState } from 'react';
import '../../../src/components/style.css';

import { validateEmail } from '../utils/helpers';

function Contact() {
    return (
        <div>
          <section id="contact">
            <h3>Contact</h3>
            <ul class="footer">
              <li class="email">Email: kolemazur@gmail.com</li>
              <li class="links"><a href="https://www.linkedin.com/in/nikolas-mazur-97b312230/" target="_blank">LinkedIn</a></li>
              <li class="links"><a href="https://github.com/NikolasMazur" target="_blank">GitHub</a></li>
            </ul>
          </section>
        </div>
    )
}

export default Contact;