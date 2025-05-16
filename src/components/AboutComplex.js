import React from 'react';
import './AboutComplex.css';

const AboutComplex = () => {
  return (
    <div className="about-complex">
      <div className="about-complex-header">
        <h2>О жилом комплексе</h2>
        <p className="about-tagline">Элитное жилье для ценителей комфорта и стиля</p>
      </div>
      
      <div className="about-complex-content">
        <div className="about-complex-image-container">
          <img 
            src="/images/properties/about-complex.jpg" 
            alt="Hayot Tower" 
            className="about-complex-image"
          />
        </div>
        
        <div className="about-complex-text">
          <h3>Уникальная архитектура</h3>
          <p>
            Hayot Tower — воплощение современной архитектурной мысли. Уникальный фасад здания, 
            выполненный из высококачественных материалов, гармонично вписывается в городской пейзаж, 
            одновременно выделяясь своим изысканным дизайном.
          </p>
          
          <h3>Роскошные интерьеры</h3>
          <p>
            Холлы и общественные пространства комплекса оформлены с использованием премиальных отделочных 
            материалов. Высокие потолки, панорамные окна и просторные планировки создают атмосферу 
            свободы и комфорта.
          </p>
          
          <h3>Современные технологии</h3>
          <p>
            Жилой комплекс оснащен интеллектуальными системами безопасности, включая видеонаблюдение, 
            контроль доступа и круглосуточную охрану. Высокоскоростные лифты и современные инженерные системы 
            обеспечивают максимальный комфорт проживания.
          </p>
        </div>
      </div>
      
      <div className="about-complex-advantages">
        <h3>Преимущества Hayot Tower</h3>
        <div className="advantages-grid">
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 12H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8.5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Развитая инфраструктура</h4>
            <p>Рестораны, магазины и сервисы в шаговой доступности</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Премиальный сервис</h4>
            <p>Консьерж-сервис и профессиональное управление комплексом</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Уникальное расположение</h4>
            <p>В центре деловой и культурной жизни города</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Зоны отдыха</h4>
            <p>Собственная территория с ландшафтным дизайном и зонами для отдыха</p>
          </div>
        </div>
      </div>
      
      <div className="about-complex-features">
        <div className="feature-column">
          <h4>Безопасность</h4>
          <ul>
            <li>Круглосуточная охрана</li>
            <li>Видеонаблюдение по периметру</li>
            <li>Контроль доступа</li>
            <li>Подземный паркинг с системой распознавания номеров</li>
          </ul>
        </div>
        
        <div className="feature-column">
          <h4>Комфорт</h4>
          <ul>
            <li>Фитнес-центр премиум-класса</li>
            <li>СПА и зона релаксации</li>
            <li>Детская игровая комната</li>
            <li>Коворкинг и переговорные пространства</li>
          </ul>
        </div>
        
        <div className="feature-column">
          <h4>Технологии</h4>
          <ul>
            <li>Интеллектуальные системы управления</li>
            <li>Высокоскоростной интернет</li>
            <li>Энергоэффективные решения</li>
            <li>Современные инженерные коммуникации</li>
          </ul>
        </div>
      </div>
      
      <div className="about-complex-cta">
        <h3>Готовы познакомиться с Hayot Tower лично?</h3>
        <button className="cta-button">Записаться на просмотр</button>
      </div>
    </div>
  );
};

export default AboutComplex; 