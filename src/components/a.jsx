import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Make sure to import Navbar if it's a separate component

function App() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const handleInstagramClick = () => {
    const instagramURL = 'https://www.instagram.com/the_cp_squad/?igshid=YmMyMTA2M2Y%3D';
    window.open(instagramURL, '_blank');
  };

  const handleGmailClick = () => {
    const gmailURL = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cpsqaud@charusat.edu.in';
    window.open(gmailURL, '_blank');
  };

  const handleLocationClick = () => {
    const locationURL = 'https://www.google.co.in/maps/place/CSPIT+(Mech%2FCivil%2FComputer%2FIT)/@22.5997641,72.8181693,18z/data=!4m6!3m5!1s0x395e50cdaaaaaaab:0x6e4cd4981f598749!8m2!3d22.5993681!4d72.8179032!16s%2Fg%2F11b7ycrldf?entry=ttu';
    window.open(locationURL, '_blank');
  };

  const handleLinkedinClick = () => {
    const linkedinURL = 'https://www.linkedin.com/company/cp-squad/';
    window.open(linkedinURL, '_blank');
  };

  const handleGithubClick = () => {
    const githubURL = 'https://github.com/cp-squad';
    window.open(githubURL, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 700;
      if (window.scrollY > threshold) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="home" className="container">
        <div id='land_page' className="background-image">
          <div className="overlay-text">
            <b>
              <h1>CP SQUAD</h1>
              <h2>CLUB</h2>
              <h2>--- code | compete | conquer ----</h2>
            </b>
          </div>
        </div>
      </div>

      <div className={`navbar-wrapper ${isNavbarFixed ? 'fixed' : ''}`}>
        <Navbar isResponsive={isResponsive} toggleResponsive={toggleResponsive} />
      </div>

      <div id="about" className="contain-aboutus">
        <center>
          <h1>About us</h1>
          <div class="slider owl-carousel">
            <div class="card">
              <div class="img">
                <img src="p1.jpg" alt=""/>
              </div>
            </div>
            <div class="card">
              <div class="img">
                <img src="p2.jpg" alt=""/>
              </div>
            </div>
            <div class="card">
              <div class="img">
                <img src="p3.jpg" alt=""/>
              </div>
            </div>
            <div class="card">
              <div class="img">
                <img src="p4.jpg" alt=""/>
              </div>
            </div>
          </div>
        </center>
        <div className="about-text">
          {/* Your about text goes here */}
        </div>
      </div>

      <div className="about-do">
        <div className="abut-do-text">
          <h1> - What do we do?</h1>
          {/* Your "What do we do?" content goes here */}
        </div>
      </div>

      <div id="event" className="event-container">
        <center>
          <h1>Event</h1>
          <div className="event-card">
            <div class="slider owl-carousel">
              <div className="card-cover">
                <div class="card">
                  <div class="img">
                    <img src="p1.jpg" alt=""/>
                  </div>
                  <h3>CP awareness</h3>  
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
                </div>
              </div>
              <div className="card-cover">
                <div class="card">
                  <div class="img">
                    <img src="p2.jpg" alt=""/>
                  </div>
                  <h3>code arcade</h3>  
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
                </div>
              </div>
              <div className="card-cover">
                <div class="card">
                  <div class="img">
                    <img src="p3.jpg" alt=""/>
                  </div>
                  <h3>Doubt Solving</h3>  
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
                </div>
              </div>
              <div className="card-cover">
                <div class="card">
                  <div class="img">
                    <img src="p4.jpg" alt=""/>
                  </div>
                  <h3>Exper talk</h3>  
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>

      <div className="contact">
        <center>
          <h1>Contact US</h1>
        </center>
        <center>
          <div className='contact-div' onClick={handleGmailClick}><img src="mail.webp" alt="" srcset="" width="20" height="20"/>cpsquad@charusat.edu.in</div>
          <br />
          <div className='contact-div' onClick={handleGithubClick}><img src="git.png" alt="" srcset="" width="20" height="20"/>Github.com/cpsquad</div>
          <br />
          <div className='contact-div' onClick={handleLinkedinClick}><img src="link.jpg.webp" alt="" srcset="" width="20" height="20"/>linkedn/CPSQUAD</div>
          <br />
          <div className='contact-div' onClick={handleInstagramClick}><img src="inst.jpg.webp" alt="" srcset="" width="20" height="20"/>Instagram</div>
          <br />
          <div className='contact-div' onClick={handleLocationClick}><img src="maps.jpg.webp" alt="" srcset="" width="20" height="20"/>CSPIT CHARUSAT</div>
        </center>
      </div>
    </div>
  );
}

export default App;
