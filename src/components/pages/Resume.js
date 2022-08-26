import React from 'react';
import resume from '../../assets/pdf/resume.pdf'

const style = {
  Content: {
    textAlign: "center",
    marginTop: "5%",
    fontSize: "2em"
  },
  Competencies: {
    fontSize: "1em",
    textAlign: "center",
    lineHeight: "170%",
    marginTop: "1%",
  }
};

export default function Resume() {
    return (
        <div>
          <h1 style={style.Content}>Competencies</h1>
          <ul style={style.Competencies}>
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
            <br />
            <br />
            <li>
            <a style={style.Content} href={resume} target="_blank">Resume PDF</a>
            </li>
          </ul>
        </div>
    )
}