import React from 'react';
import './App.css';
import PropertySlider from './components/PropertySlider';
import PropertyCard from './components/PropertyCard';

function App() {
  // Sample data for property cards
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa',
      location: 'Palm Jumeirah, Dubai',
      description: 'Elegant villa with private beach access and stunning sea views.',
      bedrooms: 4,
      bathrooms: 5.5,
      area: 5000,
      price: 3500000,
      image: '/images/properties/property1.jpg'
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: 'Downtown, Dubai',
      description: 'Contemporary apartment with Burj Khalifa views and premium amenities.',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      price: 950000,
      image: '/images/properties/property2.jpg'
    },
    {
      id: 3,
      title: 'Waterfront Townhouse',
      location: 'Dubai Marina',
      description: 'Spacious townhouse with marina views and direct access to the beach.',
      bedrooms: 3,
      bathrooms: 3.5,
      area: 2200,
      price: 1800000,
      image: '/images/properties/property3.jpg'
    },
  ];

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">Real Estate</div>
        <nav>
          <ul>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="hero-section">
        <PropertySlider />
      </div>
      
      <section id="properties" className="properties-section">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are a leading real estate company with years of experience in the market. Our mission is to help our clients find their dream properties with exceptional service and expertise.</p>
        <div className="about-features">
          <div className="feature">
            <h3>Expert Advisors</h3>
            <p>Our team consists of experienced professionals who know the market inside out.</p>
          </div>
          <div className="feature">
            <h3>Premium Properties</h3>
            <p>We offer a curated selection of high-quality properties in the most desirable locations.</p>
          </div>
          <div className="feature">
            <h3>Client Satisfaction</h3>
            <p>We prioritize our clients' needs and ensure a smooth buying or selling process.</p>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      
      <footer className="app-footer">
        <p>&copy; 2023 Real Estate Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; 