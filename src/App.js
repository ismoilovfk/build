import React, { useState, useEffect } from 'react';
import './App.css';
import PropertySlider from './components/PropertySlider';
import PropertyCard from './components/PropertyCard';
import AboutComplex from './components/AboutComplex';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sample data for property cards
  const properties = [
    {
      id: 1,
      title: 'Престижные апартаменты',
      location: 'Hayot Tower, 4-12 этаж',
      description: 'Просторные апартаменты с панорамными окнами и высококачественной отделкой.',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      price: 650000,
      image: '/images/properties/property1.jpg'
    },
    {
      id: 2,
      title: 'Семейные резиденции',
      location: 'Hayot Tower, 14-20 этаж',
      description: 'Комфортные семейные резиденции с увеличенной площадью и эргономичной планировкой.',
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      price: 950000,
      image: '/images/properties/property2.jpg'
    },
    {
      id: 3,
      title: 'Премиум пентхаусы',
      location: 'Hayot Tower, 21-24 этаж',
      description: 'Эксклюзивные пентхаусы с террасами и собственными зонами отдыха на верхних этажах.',
      bedrooms: 5,
      bathrooms: 4,
      area: 250,
      price: 1800000,
      image: '/images/properties/property3.jpg'
    },
  ];

  return (
    <div className="App">
      <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Hayot Tower</div>
        <nav>
          <ul>
            <li><a href="#properties">Апартаменты</a></li>
            <li><a href="#about">О комплексе</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="hero-section">
        <PropertySlider />
      </div>
      
      <section id="properties" className="properties-section">
        <h2>Элитные апартаменты</h2>
        <div className="property-grid">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      
      <section id="about" className="about-section">
        <AboutComplex />
      </section>
      
      <section id="contact" className="contact-section">
        <h2>Связаться с нами</h2>
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Телефон" />
          <textarea placeholder="Сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>
      
      <footer className="app-footer">
        <p>&copy; 2023 Hayot Tower. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App; 