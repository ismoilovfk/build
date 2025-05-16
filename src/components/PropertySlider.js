import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertySlider = () => {
  // Create refs for custom navigation
  const [slider, setSlider] = useState(null);

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button 
      className="slick-arrow custom-prev-arrow" 
      onClick={onClick}
      aria-label="Previous"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button 
      className="slick-arrow custom-next-arrow" 
      onClick={onClick}
      aria-label="Next"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Reduced from 5000 to 3000 for faster rotation
    fade: false, // Changed from true to false for slide effect
    cssEase: 'cubic-bezier(0.45, 0, 0.55, 1)',
    draggable: true,
    swipe: true,
    touchMove: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    beforeChange: (current, next) => console.log(`Sliding from ${current} to ${next}`),
    afterChange: current => console.log(`Slid to ${current}`),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false // Hide arrows on mobile
        }
      }
    ]
  };

  // Add the PUBLIC_URL from environment 
  const PUBLIC_URL = process.env.PUBLIC_URL || '';

  // Slider properties with data for each slide
  const sliderProperties = [
    {
      image: `${PUBLIC_URL}/images/properties/property1.jpg`,
      title: 'Hayot Tower',
      description: 'Exclusive living in the heart of the city',
      priceFrom: 'Starting from $650,000',
      buttonText: 'Explore Residences'
    },
    {
      image: `${PUBLIC_URL}/images/properties/property2.jpg`,
      title: 'Luxury Penthouses',
      description: 'Panoramic views from premium rooftop residences',
      priceFrom: 'Starting from $1,200,000',
      buttonText: 'View Penthouse Details'
    },
    {
      image: `${PUBLIC_URL}/images/properties/property3.jpg`,
      title: 'Corner Residences',
      description: 'Elegant corner units with abundant natural light',
      priceFrom: 'Starting from $850,000',
      buttonText: 'See Available Units'
    },
    {
      image: `${PUBLIC_URL}/images/properties/property4.jpg`,
      title: 'Urban Sanctuary',
      description: 'Modern living with exceptional amenities',
      priceFrom: 'Starting from $720,000',
      buttonText: 'Schedule a Tour'
    },
  ];

  return (
    <div className="property-slider-container">
      <div className="property-slider">
        <Slider ref={slider => setSlider(slider)} {...settings}>
          {sliderProperties.map((property, index) => (
            <div key={index} className="slider-item">
              <div 
                className="property-image" 
                style={{
                  backgroundImage: `url(${property.image})`,
                  height: '80vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
              >
                <div className="overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.3)'
                }}></div>
                <div className="property-info">
                  <h1>{property.title}</h1>
                  <h3>{property.description}</h3>
                  <p className="price">{property.priceFrom}</p>
                  <button className="learn-more-btn">{property.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Optional: Add manual navigation buttons outside slider */}
      <div className="slider-nav-buttons">
        <button 
          className="nav-button prev" 
          onClick={() => slider && slider.slickPrev()}
          aria-label="Previous Property"
        >
          Previous
        </button>
        <div className="slider-indicators">
          {sliderProperties.map((_, index) => (
            <button 
              key={index}
              className="indicator-dot" 
              onClick={() => slider && slider.slickGoTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="nav-button next" 
          onClick={() => slider && slider.slickNext()}
          aria-label="Next Property"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PropertySlider; 