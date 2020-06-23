import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { MDBIcon, MDBContainer } from 'mdbreact'; import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBAnimation } from "mdbreact";



const App = () => {
  return (
    <div className="back">
      <Particles className="partical"
        params={{
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 10,
              "random": true
            },
            "move": {
              "direction": "bottom",
              "out_mode": "out"
            },
            "line_linked": {
              "enable": false
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "remove"
              }
            },
            "modes": {
              "remove": {
                "particles_nb": 10
              }
            }
          }
        }} />
      <header className="head">
        <img className="fluid" src="j.png"></img>
      </header>
      <MDBAnimation type="bounce" infinite>
        <p className="name">Akbar Alijonov</p>
      </MDBAnimation>


      <div className="about">
        <h1>About me</h1>
      </div>

      <div className="info">
        <div className="conta">
          <i className="ins-ic mr-3 color">
            <MDBIcon fab icon="instagram"></MDBIcon>
            <a href="https://www.instagram.com/" className="social"> jek_0201</a>
          </i>


          <i className="git-ic mr-3 color">
            <MDBIcon fab icon="github"></MDBIcon>
            <a href="https://github.com/" className="social">akbar0201</a>
          </i>

          <i className="email-ic mr-3 color">
            <MDBIcon icon="envelope"></MDBIcon>
            <a href="https://mail.ru/" className="social">akbar.alijonov@bk.ru</a>
          </i>
        </div>

        <div className="conta">
          <i class="fab fa-react mr-3 color"> Reactjs</i>
          <i class="fab fa-html5 mr-3 color"> Html5</i>
          <i class="fab fa-css3-alt mr-3 color"> Css3</i>
          <i class="fab fa-bootstrap mr-3 color"> Bootstrap</i>
        </div>

      </div>
      <br />




      <div className="middle">
        <div className="box">
          <h2>Education</h2>
          <h6>Gymnasium school</h6>
          <p>Tashkent, 2003-2012.</p>
          <h6>TDSHU lyceum</h6>
          <p>Tashkent, 2013-2016.</p>
          <h6>SOS IT ACADEMY</h6>
          <p>Tashkent, 6 month course.</p>
          <h6>Tashkent Turin Polytechnic University</h6>
          <p>2017-Present
          Courses "Second level".
              </p>
        </div>

        <div className="box2">
          <h2>Skills</h2>
          <h6>teamworking</h6>
          <h6>quick learner</h6>
          <h6>coding and Programming</h6>
          <h6>Adaptabilityt</h6>
        </div>

        <div className="box2">
          <h2>Interests</h2>
          <h6>Playing footbal</h6>
          <h6>Traveling</h6>
          <h6>Reading books</h6>
          <h6>Dota 2</h6>
        </div>
      </div>
      <div className="foot">
        <h2>Contact information</h2>
        <p><i class="fas fa-map-marker-alt pr-2"></i>Shaykhontohur district, Zangi ota street, 22</p>
        <p><i class="fas fa-phone pr-2"></i>+99890 997-55-19</p>
        <p><i class="fas fa-envelope pr-2"></i>akbar.alijonov@bk.ru</p>

      </div>

    </div>

  )
}
export default App