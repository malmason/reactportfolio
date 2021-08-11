import React from 'react';
import '../App.css';
import logo from './images/logo.png'


function FooterSection(){
  return (
    <footer id="main-footer">  
      <img src={logo} alt="logo" class="footer-logo"/>
      <p>Copyright &copy; 2021</p>
    </footer>
  )
}

export default FooterSection