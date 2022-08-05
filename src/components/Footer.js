import React from 'react';

const style = {
  footerFormat: {
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "30px",
    marginTop: "80px",
    marginBottom: "30px",
  },
  footer: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "2em",
  },
}

function Footer() {
  return(
  <div style={style.footerFormat} id="contact">
    <h3>Contact</h3>
    <ul className="footer">
      <li className="email">Email: kolemazur@gmail.com</li>
      <li className="links"><a
      href="https://www.linkedin.com/in/nikolas-mazur-97b312230/" target="_blank"
      >LinkedIn</a></li>
      <li className="links"><a
      href="https://github.com/NikolasMazur" target="_blank"
      >GitHub</a></li>
      <li className="links"><a
      href="./assets/pdf/Resume (2022).pdf" target="_blank"
      >Resume PDF</a></li>
    </ul>
  </div>
  );
};

export default Footer;