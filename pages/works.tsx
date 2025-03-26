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
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/ff1e7a4ad5052319ecd7c1748da01ad9/?p=SrgUPX9UmBgnpZM6FGp3Tw" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №2 */}
          <div className="work-item">
            <h3 className="work-title">№2 Поучительная история (Брянск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №2 */}
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/41062d3f191ab945f01474c088e7519c" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
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
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/dbc09df3fd596b8222d7cdb24d3f12b0/?p=riQCTH5eURv6JYwdd4svtA" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №5 */}
          <div className="work-item">
            <h3 className="work-title">№5 Случай в городе "Смартленд" (Новосибирск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №5 */}
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/c26029fdb1307868f3e07880efe59bec/?p=ml_xdMs4uNsdhHVsqElfDg" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №6 */}
          <div className="work-item">
            <h3 className="work-title">№6 Семейный рецепт (Пермь)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №6 */}
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/b517e2db6e93926005b1b5483ea71338/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №7 */}
          <div className="work-item">
            <h3 className="work-title">№7 Забытый чемодан (Ростов)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №7 */}
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/b8260b78b07ef9bb95cc93b22a0816aa" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №8 */}
          <div className="work-item">
            <h3 className="work-title">№8 Эсав, дай цдаку! (Самара)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №8 */}
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/5fd2531ec9c1fec14ccf867ccfcdac42" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №9 */}
          <div className="work-item">
            <h3 className="work-title">№9 Сбежавшее молоко (Томск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №9 */}
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/e5b3ffb4afe01dc56023cf3c98ca7749/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
          
          {/* Плейсхолдер для работы №10 */}
          <div className="work-item">
            <h3 className="work-title">№10 Яркий мир (Челябинск)</h3>
            <div className="video-wrapper">
              {/* Здесь будет код вставки плеера №10 */}
              <iframe width="720" height="405" src="https://rutube.ru/play/embed/b7402965a43777ad7dbe908eba672a9d/?p=SICFzCthbPUaS_PyAU7QEQ" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Экспортируем компонент с отключенным SSR
export default dynamic(() => Promise.resolve(WorksPage), { ssr: false }); 