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
        <div className="section-container">
          <h2>Элитные апартаменты</h2>
          <p className="section-description">
            Откройте для себя коллекцию эксклюзивных апартаментов Hayot Tower, где роскошь встречается с комфортом.
            Выберите идеальное пространство, отвечающее вашим потребностям.
          </p>
          <div className="property-grid">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="view-all-container">
            <button className="view-all-btn">Смотреть все варианты</button>
          </div>
        </div>
      </section>
      
      <section id="about" className="about-section">
        <AboutComplex />
      </section>
      
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2>Связаться с нами</h2>
          <p className="section-description">
            Получите дополнительную информацию о Hayot Tower или запишитесь на просмотр, связавшись с нашими консультантами.
          </p>
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Телефон" />
            <textarea placeholder="Сообщение"></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </section>
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Hayot Tower</h3>
            <p>Элитный жилой комплекс в центре города</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-column">
              <h4>Апартаменты</h4>
              <ul>
                <li><a href="#prestige">Престижные апартаменты</a></li>
                <li><a href="#family">Семейные резиденции</a></li>
                <li><a href="#penthouse">Премиум пентхаусы</a></li>
              </ul>
            </div>
            
            <div className="footer-link-column">
              <h4>О комплексе</h4>
              <ul>
                <li><a href="#architecture">Архитектура</a></li>
                <li><a href="#amenities">Инфраструктура</a></li>
                <li><a href="#location">Расположение</a></li>
              </ul>
            </div>
            
            <div className="footer-link-column">
              <h4>Контакты</h4>
              <ul>
                <li><a href="tel:+998000000000">+998 (00) 000-00-00</a></li>
                <li><a href="mailto:info@hayottower.com">info@hayottower.com</a></li>
                <li><a href="#address">г. Ташкент, ул. Примерная, 123</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Hayot Tower. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 