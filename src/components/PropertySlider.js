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
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
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
    <div className="property-slider">
      <Slider {...settings}>
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
  );
};

export default PropertySlider; 