import React from 'react';
import '../App.css';

function ContactSection() {
  return (
    <main id="contact">
      <h1 className="lg-heading">Contact <span className="text-secondary">Me</span></h1>
      <h2 className="sm-heading">This is how you can reach me...</h2>
      <div className="boxes">
        <div className="contact">
          <h2 className="contact-name">Malcolm Mason</h2>
            <p id="my-title">FULL STACK WEB DEVELOPER</p>
            <p>Email: malmason66@gmail.com</p>
            <p>Phone: (203) 578-0892</p>
            <div className="icons">
              <a href="https://github.com/malmason" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/malcolm-mason-1491a31b9/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="./docs/resume.pdf" target="_blank" rel="noreferrer"><i className="fas fa-file-pdf"></i></a>
            </div>
        </div>
        <div className="quote">
          <h2 className="quote-title">Request a Quote</h2>    
            <div className="form">
              <form action="">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."></input>
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Your E-mail Address..."></input>
                <label for="description">Project Description</label>
                <input type="textarea" id="description" name="description" placeholder="Your project description.."></input>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
        </div>
      </div>
    </main>
  )
}

export default ContactSection