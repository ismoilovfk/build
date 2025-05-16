import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, onButtonClick }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="property-card">
      <div 
        className="property-card-image" 
        style={{
          backgroundImage: `url(${property.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="property-card-content">
        <h3>{property.title}</h3>
        <p className="property-location">{property.location}</p>
        <p className="property-description">{property.description}</p>
        <div className="property-features">
          <span>{property.bedrooms} комн.</span>
          <span>{property.bathrooms} санузл.</span>
          <span>{property.area} м²</span>
        </div>
        <div className="property-price">{formatPrice(property.price)}</div>
        <button className="view-property-btn" onClick={onButtonClick}>Смотреть детали</button>
      </div>
    </div>
  );
};

export default PropertyCard; 