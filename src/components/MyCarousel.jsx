import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

function MyCarousel() {
  useEffect(() => {
    $(".slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000, // 2000ms = 2s;
      autoplayHoverPause: true,
    });
  }, []); // Run only once on component mount

  return (
    <div className="slider owl-carousel">
      <div className="item"><img src="https://placekitten.com/200/300" alt="Slide 1" /></div>
      <div className="item"><img src="https://placekitten.com/200/300" alt="Slide 2" /></div>
      <div className="item"><img src="https://placekitten.com/200/300" alt="Slide 3" /></div>
    </div>
  );
}

export default MyCarousel;
