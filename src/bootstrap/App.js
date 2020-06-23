import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';




const App = () => {
  return (
    <div>
      <header className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center">
          <div className="bootstrap">
            <a href="https://getbootstrap.com/">Bootstrap</a>
          </div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="#Home">Home</a>
              </li>
              <li className>
                <a href="#About">About</a>
              </li>
              <li className>
                <a href="#Services">Services</a>
              </li>
              <li className>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li className>
                <a href="#Tean">Team</a>
              </li>
              <li className>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="get-start">
            <a href="#About" className="get-started-btn scrollto">Get Started</a>
          </div>
        </div>
      </header>




      <section className="sec d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h1>Better Solutions For Your Business</h1>
              <h2>We are team of talanted designers making websites with Bootstrap</h2>
              <div className="d-lg-flex">
                <div className="get">
                  <a href="#About" className="btn-get-started scrollto">Get Started</a>
                </div>
                <div className="video">
                  <a href="https://www.youtube.com/" className="venbox btn-watch-video vbox-item" data-vbtype="video" data-autoplay="true">Watch Video
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>

            </div>


            <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
              <img src="he.png" className="img-fluid animated" alt="rasm"></img>
            </div>

          </div>
        </div>
      </section>





      <main id="main">
        <section id="cliens" className="cliens section-bg">
          <div className="container">
            <div className="row aos-init aos-animate" data-aos="zoom-in">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="images.png" className="img-fluid" alt="rasm"></img>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="image.png" className="img-fluid" alt="rasm"></img>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="life.png" className="img-fluid" alt="rasm"></img>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="l.png" className="img-fluid" alt="rasm"></img>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="cit.png" className="img-fluid" alt="rasm"></img>
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="tru.png" className="img-fluid" alt="rasm"></img>
              </div>
            </div>
          </div>
        </section>

        {/* client  */}


        <section id="about" className="about">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>ABOUT US</h2>
            </div>



            <div className="row content">
              <div className="col-lg-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                <ul>
                  <li>
                    <i className="fas fa-check-double"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  );


}


export default App;