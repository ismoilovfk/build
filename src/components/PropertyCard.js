import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div 
        className="property-card-image" 
        style={{
          backgroundImage: `url(${property.image})`,
          height: '200px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '4px 4px 0 0'
        }}
      />
      <div className="property-card-content">
        <h3>{property.title}</h3>
        <p className="property-location">{property.location}</p>
        <p className="property-description">{property.description}</p>
        <div className="property-features">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area} sq ft</span>
        </div>
        <div className="property-price">${property.price.toLocaleString()}</div>
        <button className="view-property-btn">View Property</button>
      </div>
    </div>
  );
};

export default PropertyCard; 