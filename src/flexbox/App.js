import React from 'react';
import './App.css';
import { DivMode } from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMugHot, faChartBar, faDigitalTachograph, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from 'react-fontawesome';



const App = () => {
  return (
    <div>
      <div className="back">
        <header className="head">
          <h2><a href="#">Flexbox</a></h2>
          <nav>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
          </nav>
        </header>


        <section className="banner-area">
          <h1>Flexbox Website</h1>
          <h3>Responsive Web Design</h3>
          <a href="#" className="banner-btn">Contact us</a>
        </section>
      </div>




      <section className="about-area">
        <div className="about-us">
          <h2> About us</h2>
        </div>

        <div className="about-two">
          <div className="right">
            <h3>About our Company</h3>
            <p>From the biggest social apps to integrated design systems, React JS development has helped companies achieve the hardest tech challenges.</p>
            <a className="learn" href="#">Learn more</a>
          </div>

          <img className="wid" src="l.png" alt="photo"></img>
        </div>
      </section>



      <section className="service">
        <h2>Services</h2>
        <div className="serv-three">
          <div className="servi">
            <FontAwesomeIcon className="ic" icon={faMugHot} />
            <h6>Web Design</h6>
            <p>Make your ideas come to life with a wix site.This website was designed with Wix.</p>
          </div>

          <div className="servi">
            <FontAwesomeIcon className="ic" icon={faChartBar} />
            <h6>Marketing</h6>
            <p>Marketing is the study and management of exchange relationships.</p>
          </div>

          <div className="servi">
            <FontAwesomeIcon className="ic" icon={faDigitalTachograph} />
            <h6>Graphics</h6>
            <p>Graphics can be functional or artistic. The latter can be a recorded version.</p>
          </div>
        </div>
      </section>



      <section className="contact">
        <h2>Contact</h2>
        <div className="cont-three">
          <div className="contacts">
            <FontAwesomeIcon className="ic" icon={faMapMarkerAlt} />
            <h6>Tashkent city,Zangi ota street,22</h6>
          </div>

          <div className="contacts">
            <FontAwesomeIcon className="ic" icon={faPhone} />
            <h6>+998909975519</h6>
          </div>

          <div className="contacts">
            <FontAwesomeIcon className="ic" icon={faEnvelope} />
            <h6>akbar.alijonov@bk.ru</h6>
          </div>
        </div>
      </section>


      <footer>
        <h6>All Right Reserved by Your Website</h6>
      </footer>

    </div>


  )
}

export default App