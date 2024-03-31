

// //1st bg complete
// // import { useState } from 'react';
// // import './App.css';

// // function App() {
// //   const [count, setCount] = useState(0);

// //   return (
// //     <>
// //     <div className="container">
// //       {/* Empty div to serve as a container for the background image */}
// //       <div className="background-image" >
// //         CP SQUAD </div>
// //         <div>CLUB</div>
// //         <div>---CODE | COMPETE | CONQUE -----</div>
// //     </div>
// //     </>
// //   );
// // }

// // export default App;


// // import { useState } from 'react';
// // import './App.css';
// // import './components/Navbar.css'

// // function App() {
// //   const [count, setCount] = useState(0);

// //   return (
// //     <>
// //     <div className="container">
// //       {/* Empty div to serve as a container for the background image */}
// //       <div className="background-image">
// //         <div className="overlay-text">
// //        <h1>CP SQUAD</h1>
// //        <h2>CLUB</h2>
// //        <h2>code-comptet-conquer</h2>
// //         </div>
// //       </div>
// //     </div>

// //       <div color='red'>hello world</div>
// // {/* 
// //       <nav className='navbar'>
// //       <ul className="navbar-menu">
// //         <li className="navbar-item">home</li> <div className="nav-space">|</div>
// //         <li className="navbar-item">about</li> <div className="nav-space">|</div>
// //         <li className="navbar-item">ebent</li> <div className="nav-space">|</div>
// //         <li className="navbar-item">our team</li>
// //       </ul>
// //       </nav> */}


// //     </>
// //   );
// // }



// // export default App;



// import React, { useState } from 'react';
// import './App.css';
// import './components/Navbar.css';
// import Navbar from './components/Navbar'; // Import the Navbar component

// function App() {
//   const [isResponsive, setIsResponsive] = useState(false);

//   const toggleResponsive = () => {
//     setIsResponsive(!isResponsive);
//   };

//   return (
//     <div>
//       <div className="container">
//         {/* Empty div to serve as a container for the background image */}
//         <div className="background-image">
//           <div className="overlay-text">
//             <h1>CP SQUAD</h1>
//             <h2>CLUB</h2>
//             <h2>code-comptet-conquer</h2>
//           </div>
//         </div>
//       </div>

//       <Navbar isResponsive={isResponsive} toggleResponsive={toggleResponsive} />

//       <div color='red'>hello world</div>
//     </div>
//   );
// }

// export default App;

//correct navbar

// import React, { useState } from 'react';
// import './App.css';
// import './components/Navbar.css';
// import Navbar from './components/Navbar'; // Import the Navbar component

// function App() {
//   const [isResponsive, setIsResponsive] = useState(false);

//   const toggleResponsive = () => {
//     setIsResponsive(!isResponsive);
//   };

//   return (
//     <div>
//       <div className="container">
//         {/* Empty div to serve as a container for the background image */}
//         <div className="background-image">
//           <div className="overlay-text">
//             <h1>CP SQUAD</h1>
//             <h2>CLUB</h2>
//             <h2>code-comptet-conquer</h2>
//           </div>
//         </div>
//       </div>

//       {/* Navbar component */}
//       <Navbar isResponsive={isResponsive} toggleResponsive={toggleResponsive} />

//       <div color='red'>hello world</div>
//     </div>
//   );
// }

// export default App;

//2nd dinner till complete afte card 1st try without imgg coorrect

import React, { useState, useEffect } from 'react';

import './App.css'; // Add your own CSS file if needed
import './App.css';
import './components/Navbar.css';
import './components/aboutcard.css';
import './components/SliderComponent.css';
import './components/SliderComponent';
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.jpg'
import inst from './assets/inst.jpg.webp'
import link from './assets/link.jpg.webp'
import mail from './assets/mail.webp'
import maps from './assets/maps.jpg.webp'
import git from './assets/git.png'

import Navbar from './components/Navbar';

 // Import the Navbar component
// import aboutcard from './components/aboutcard.css'

//final complete

function App() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };
  const handleInstagramClick = () => {
    // Define the Instagram URL and open it in a new tab when the Instagram icon is clicked
    const instagramURL = 'https://www.instagram.com/the_cp_squad/?igshid=YmMyMTA2M2Y%3D';
    window.open(instagramURL, '_blank');
  };

  const handleGmailClick = () => {
    // Define the Gmail URL and open it in a new tab when the Gmail icon is clicked
    const gmailURL = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cpsqaud@charusat.edu.in';
    window.open(gmailURL, '_blank');
  };

  const handleLocationClick = () => {
    // Define the Location URL and open it in a new tab when the Location icon is clicked
    const locationURL = 'https://www.google.co.in/maps/place/CSPIT+(Mech%2FCivil%2FComputer%2FIT)/@22.5997641,72.8181693,18z/data=!4m6!3m5!1s0x395e50cdaaaaaaab:0x6e4cd4981f598749!8m2!3d22.5993681!4d72.8179032!16s%2Fg%2F11b7ycrldf?entry=ttu';
    window.open(locationURL, '_blank');
  };

  const handleLinkedinClick = () => {
    // Define the LinkedIn URL and open it in a new tab when the LinkedIn icon is clicked
    const linkedinURL = 'https://www.linkedin.com/company/cp-squad/';
    window.open(linkedinURL, '_blank');
  };

  const handleGithubClick = () => {
    // Define the GitHub URL and open it in a new tab when the GitHub icon is clicked
    const githubURL = 'https://github.com/cp-squad';
    window.open(githubURL, '_blank');
  };
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 700; // Adjust this threshold as needed
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
        {/* Empty div to serve as a container for the background image */}
        <div id='land_page' className="background-image">
          <div className="overlay-text">
          <b> <h1>CP SQUAD</h1>
            <h2>CLUB</h2>
            <h2>--- code | compete | conquer ----</h2>
            </b> 
          </div>
        </div>
      </div>

      <div className={`navbar-wrapper ${isNavbarFixed ? 'fixed' : ''}`}> {/* Apply 'fixed' class when navbar should be fixed */}
        <Navbar isResponsive={isResponsive} toggleResponsive={toggleResponsive} />
      </div>

      <div id="about" className="contain-aboutus">
        <center>
        <h1>About us</h1>
        
{/* /////////////////////-----------------//////////// */}
<div class="slider owl-carousel">
  <div class="card">
    <div class="img">
      <img src={p1} alt=""/>
    </div>
   
  </div>

  <div class="card">
    <div class="img">
      <img src={p2}  alt=""/>
    </div>
   
   
  </div>

  <div class="card">
    <div class="img">
      <img src={p3}  alt=""/>
    </div>
   
  </div>
  <div class="card">
    <div class="img">
      <img src={p4}  alt=""/>
    </div>
   
  </div>
 
</div>
</center>


        <div className="about-text">
       We believe that Competitive Programming is more than just a hobby. it's a mindset that sharpens your problem-solving skills, enhances your coding 
abilities and challenges you to think creatively under pressure. <br /><br />
If you're ready to embark on an exciting coding adventure, meet fellow programmers and push your boundaries in the world of competitive
programming, we invite you to join us at the CP Squad Club. <br /><br />
Together, we will conquer challenges, unlock new levels of coding proficiency and celebrate the thrill of problem-solving. Let's code, compete, and
conquer the world of Programming! <br />
<br />
       </div>
      
      </div>
     
      <div className="about-do">
        <div className="abut-do-text">
       <h1> -
What do we do?</h1>
• We organize regular coding contests, workshops and practice sessions, where members <br />
can challenge themselves, learn from one another, and gain valuable insights from <br />
reputed Experts. <br /> <br />    
• Our club values inclusivity, collaboration and continuous learning. We encourage <br />
members to collaborate, exchange ideas, and support each other in their journey <br />
toward becoming proficient competitive programmers. <br /> 

<h1>-Our Goal</h1>
Our goal is to provide a platform for like-minded individuals who are enthusiastic
about <br /> coding and algorithmic problem-solving. <br /> 
        </div>
      </div>
        {/* ---------//about com[lete]
         */}

         <div id="event" className="event-container">

<center>
          <center> <h1>Event</h1></center>
          <div className="event-card">

          <div class="slider owl-carousel">

            
            <div className="card-cover">
  <div class="card">
    <div class="img">
      <img src={p4}  alt=""/>
    </div>
    <h3>CP awareness</h3>  

    <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
</div>
  </div>

<div className="card-cover">
  <div class="card">
    <div class="img">
      <img src={p3}  alt=""/>
    </div>
    <h3>code arcade</h3>  
    <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
   
  </div>
  </div>

<div className="card-cover">
  <div class="card">
    <div class="img">
      <img src={p2} alt=""/>
    </div>
    <h3>Doubt Solving</h3>  

    <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
  </div>
  </div>
  <div className="card-cover">
  <div class="card">
    <div class="img">
      <img src={p1}  alt=""/>
    </div>
    <h3>Exper talk</h3>  

    <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
  </div>
  </div>
 
</div>
          </div>
          </center>
         </div>

         {/* <div className="contact">
          <h1>Contact US</h1> */}
          <div id="contact" className="contact">
<center>
<h1>Contact US</h1>

</center>
<center>
<div className='contact-div' onClick={handleGmailClick }><img src={mail} alt=""  srcset="" width="20" height="20"/>cpsquad@charusat.edu.in</div>
<br />
<div className='contact-div' onClick={handleGithubClick }><img src={git} alt=""  srcset="" width="20" height="20"/>Github.com/cpsquad</div>
<br />

<div className='contact-div' onClick={handleLinkedinClick }><img src={link} alt=""  srcset="" width="20" height="20"/
>linkedn/CPSQUAD</div>
<br />

<div className='contact-div' onClick={handleInstagramClick }><img src={inst} alt=""  srcset="" width="20" height="20"/
>Instagram</div>
<br />

<div className='contact-div' onClick={handleLocationClick }><img src={maps} alt=""  srcset="" width="20" height="20"/>CSPIT CHARUSAT</div>
</center>

</div>

        
      </div>

      

        
    
  );
}

export default App;


