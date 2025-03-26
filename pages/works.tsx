import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTelegram } from '../hooks/useTelegram';
import Link from 'next/link';

// Компонент страницы просмотра работ
function WorksPage() {
  // Добавляем состояние для отслеживания клиентского рендеринга
  const [isClient, setIsClient] = useState(false);
  const { isReady } = useTelegram();
  
  // Устанавливаем isClient в true после монтирования компонента
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <div className="card">
        <div className="logo">
          <img 
            src="/images/logo.png" 
            alt="Lego мультфильм логотип" 
            width={100}
            height={100}
          />
        </div>
        
        <h1>
          Работы участников
        </h1>
        
        <div className="works-navigation">
          <Link href="/">
            <button className="back-button">
              Вернуться к голосованию
            </button>
          </Link>
        </div>

        <div className="works-container">
          {/* Плейсхолдер для работы №1 */}
          <div className="work-item">
            <h3 className="work-title">№1 Предшабатний переполох (Биробиджан)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №1 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder1/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №2 */}
          <div className="work-item">
            <h3 className="work-title">№2 Поучительная история (Брянск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №2 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder2/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №3 */}
          <div className="work-item">
            <h3 className="work-title">№3 Хвостатая доброта (Витебск</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №3 */}
              <iframe width="720" height="405" 
              src="https://rutube.ru/play/embed/30e9fec7b101c6ceafa74bebc41df425/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №4 */}
          <div className="work-item">
            <h3 className="work-title">№4 Добрые дела (Екатеринбург)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №4 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder4/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №5 */}
          <div className="work-item">
            <h3 className="work-title">№5 Случай в городе "Смартленд" (Новосибирск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №5 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder5/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №6 */}
          <div className="work-item">
            <h3 className="work-title">№6 Семейный рецепт (Пермь)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №6 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder6/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №7 */}
          <div className="work-item">
            <h3 className="work-title">№7 Забытый чемодан (Ростов)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №7 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder7/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №8 */}
          <div className="work-item">
            <h3 className="work-title">№8 Эсав, дай цдаку! (Самара)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №8 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder8/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №9 */}
          <div className="work-item">
            <h3 className="work-title">№9 Сбежавшее молоко (Томск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №9 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder9/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Плейсхолдер для работы №10 */}
          <div className="work-item">
            <h3 className="work-title">№10 Яркий мир (Челябинск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №10 */}
              <iframe 
                src="https://rutube.ru/play/embed/placeholder10/" 
                frameBorder="0" 
                allow="clipboard-write; autoplay" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Экспортируем компонент с отключенным SSR
export default dynamic(() => Promise.resolve(WorksPage), { ssr: false }); 