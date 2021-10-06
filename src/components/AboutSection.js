import React from 'react';
import '../App.css';
import profile from './images/profile-md.jpg'

function AboutSection() {
  return (
    <main className="about">
      <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
      <h2 className="sm-heading">A few things about me...</h2>
      <div className="about-info">
        <img src={profile} alt="" className="bio-image" />
        <div className="bio">
          <h3 className="text-secondary">Bio</h3>
        </div>
        <div className="job job-1">
          <h3>Freelance</h3>
          <h5>Full Stack Web Developer</h5>
          <p>I am an aspiring Web Developer with over 20 years of experience
            in IT. 
          </p>
          <p>
            I have extensive experience creating desktop databases using Microsoft Access as a front-end applicaton 
            with SQL Server as the backend for storing data. I am currently enrolled at UCONN School of Engineering for Full Stack Web Development.
          </p>
        </div>
        <div className="job job-2">
          <h3>Athena Health Care Systems</h3>
          <h5>IT Director - Database Analyst</h5>
          <p>
            Head of a 15 person IT Team responsible for supporting 48 Nursing Homes, Home care and
            Hospice Nursing remote staff.</p>
            <p>Key Accomplishments:</p>
          
          <ul>
            <li>Developed multiple Microsoft Access databases with SQL as a backend for financial and
              operational reporting.</li>
            <li>Developed web-based Ad-Hoc reporting for Point Click Care (Medical EHR) utilizing a
              data warehouse and SSRS.</li>
            <li>Created VBA scripts in Microsoft Excel and Access to connect to Microsoft Dynamics for
              the CFO and financial stakeholders in the company.</li>
          </ul>

        </div>
        <div className="job job-3">
          <h3>Kimberly-Clark Corporation</h3>
          <h5>Programmer/Analyst</h5>
          <p>
            Database and VBA Coding for Mechanical and Electrical Engineers on production machines.  </p>
            <p>Key Accomplishments:</p>
        
          <ul>
            <li> Built custom databases and spreadsheets to connect to machine sensors and pull data
              for reporting and analysis.</li>
            <li> Manager for the IT department as well as operations manager for the Tissue Converting
              department.</li>
            <li> Moved from shipping to Human Resources, to head of IT before becoming an operations
              manager.
              </li>
          </ul>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <p>
            <ul>
              <li className="database"><i className="fas fa-database"></i> - SQL Server Development</li>
              <li className="database"><i className="fas fa-database"></i> - MySQL</li>
              <li className="database"><i className="fas fa-database"></i> - T-SQL Programming</li>
              <li className="database"><i className="fas fa-database"></i> - Microsoft Access Databases</li>
              <li className="database"><i className="fas fa-database"></i> - Sequelize</li>
              <li className="database"><i className="fas fa-database"></i> - MongoDB</li>
              <li className="excel"><i className="fas fa-file-excel"></i> - Excel VBA Programming</li>
              <li className="reporting"><i className="fas fa-file-alt"></i> - SSRS Ad-Hoc Reporting</li>
              <li className="html"><i className="fab fa-html5"></i> - HTML/CSS</li>
              <li className="html"><i className="far fa-window-maximize"></i> - Express Handlebars</li>
              <li className="sass"><i className="fab fa-sass"></i> - SASS</li>
              <li className="js"><i className="fab fa-js"></i> - Javascript</li>
              <li className="js"><i className="fab fa-bootstrap"></i> - Bootstrap</li>
              <li className="js"><i className="fab fa-node-js"></i> - Node Js</li>
              <li className="js"><i className="fab fa-react"></i> - React</li>
            </ul>
          </p>
        </div>

      </div>
    </main>
  )
}

export default AboutSection