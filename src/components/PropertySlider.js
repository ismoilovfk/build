import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  // These will be placeholder images until real ones are added
  const images = [
    '/images/properties/property1.jpg',
    '/images/properties/property2.jpg',
    '/images/properties/property3.jpg',
    '/images/properties/property4.jpg',
  ];

  return (
    <div className="property-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <div 
              className="property-image" 
              style={{
                backgroundImage: `url(${image})`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="property-info">
                <h2>Luxury Apartments</h2>
                <p>Starting from $500,000</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider; 