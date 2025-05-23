import React from 'react';
import './AboutComplex.css';

const AboutComplex = ({ onButtonClick }) => {
  return (
    <div className="about-complex">
      <div className="about-complex-header">
        <h2>О жилом комплексе</h2>
        <p className="about-tagline">Элитное жилье для ценителей комфорта и стиля</p>
      </div>
      
      <div className="about-complex-content">
        <div className="about-complex-image-container">
          <img 
            src={`${process.env.PUBLIC_URL}/images/properties/about-complex.jpg`}
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
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L19 6M19 6L15 2M19 6H10.5C8.01 6 6 8.01 6 10.5C6 12.99 8.01 15 10.5 15H13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L6 18M6 18L10 22M6 18H14.5C16.99 18 19 15.99 19 13.5C19 11.01 16.99 9 14.5 9H11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Полная прозрачность</h4>
            <p>Прямая трансляция со строительной площадки для отслеживания прогресса в реальном времени</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 11L11 4L19 11M4 13V20H20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4>Умный дом</h4>
            <p>Полное управление квартирой через личный кабинет и мобильное приложение</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Экосистема сервисов</h4>
            <p>Готовая экосистема в личном кабинете для управления всеми аспектами жизни в комплексе</p>
          </div>
          
          <div className="advantage-item">
            <div className="advantage-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 10H18M14 6H18M16 14H18M6 18H18M8 22H16C17.1046 22 18 21.1046 18 20V4C18 2.89543 17.1046 2 16 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Выбор оператора</h4>
            <p>Выбор оператора услуг в один клик через удобный интерфейс личного кабинета</p>
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
            <li>Индивидуальное видеонаблюдение для каждого жителя</li>
            <li>Биометрический доступ в здание</li>
          </ul>
        </div>
        
        <div className="feature-column">
          <h4>Комфорт</h4>
          <ul>
            <li>Фитнес-центр премиум-класса</li>
            <li>СПА и зона релаксации</li>
            <li>Детская игровая комната</li>
            <li>Коворкинг и переговорные пространства</li>
            <li>Консьерж-сервис 24/7</li>
            <li>Служба доставки внутри комплекса</li>
          </ul>
        </div>
        
        <div className="feature-column">
          <h4>Технологии</h4>
          <ul>
            <li>Интеллектуальные системы управления</li>
            <li>Высокоскоростной интернет</li>
            <li>Энергоэффективные решения</li>
            <li>Современные инженерные коммуникации</li>
            <li>Полное управление квартирой через смартфон</li>
            <li>Автоматизация климат-контроля и освещения</li>
            <li>Система умного дома премиум-класса</li>
          </ul>
        </div>
        
        <div className="feature-column">
          <h4>Цифровая экосистема</h4>
          <ul>
            <li>Единый личный кабинет для всех сервисов</li>
            <li>Прямые трансляции со строительных площадок</li>
            <li>Онлайн-мониторинг потребления ресурсов</li>
            <li>Заказ услуг одним кликом</li>
            <li>Управление доступом для гостей</li>
            <li>Цифровые ключи и пропуска</li>
          </ul>
        </div>
      </div>
      
      <div className="about-complex-cta">
        <h3>Готовы познакомиться с Hayot Tower лично?</h3>
        <button className="cta-button" onClick={onButtonClick}>Записаться на просмотр</button>
      </div>
    </div>
  );
};

export default AboutComplex; 