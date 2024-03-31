// import React from 'react';

// function Navbar({ isResponsive, toggleResponsive }) {
//   return (
//     <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
//       {/* Render other links only when the navbar is not responsive */}
//       {!isResponsive && (
//         <>
//           <a href="#home" className="active">Home</a>
//           <a href="#news" style={{ float: 'right' }}>News</a>
//           <a href="#contact" style={{ float: 'right' }}>Contact</a>
//           <a href="#about" style={{ float: 'right' }}>About</a>
//         </>
//       )}
//       <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
//         <i className="fa fa-bars"></i>
//       </a>
//     </div>
//   );
// }

// export default Navbar;
import React from 'react';

function Navbar({ isResponsive, toggleResponsive }) {
  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''} fixed-navbar`} id="myTopnav">
      {/* Render other links only when the navbar is not responsive */}
      {!isResponsive && (
        <>
          <a href="#home" className="active" style={{ float: 'right' }}>Home</a>
          <a href="#about" style={{ float: 'right' }}>About</a>
          <a href="#contact" style={{ float: 'right' }}>Contact</a>
          <a href="#event" style={{ float: 'right' }}>Event</a>
        </>
      )}
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
