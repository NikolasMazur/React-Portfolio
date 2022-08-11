import React from 'react';

const style = {
  Content: {
    textAlign: "center",
    marginTop: "10%",
    fontSize: "2em"
  },
  Competencies: {
    fontSize: "1em",
    textAlign: "center",
    lineHeight: "170%",
    marginTop: "2%",
    marginBottom: "5%",
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
          </ul>
          <a style={style.Content} href="./assets/pdf/Resume (2022).pdf" target="_blank">Resume PDF</a>
        </div>
    )
}