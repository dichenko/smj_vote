import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTelegram } from '../hooks/useTelegram';
import Link from 'next/link';

// Данные о видеороликах участников
const participantWorks = [
  { id: 1, title: "Работа №1", rutubeId: "a7f8c8f8f4c49d3f7c4602d7fdb9a439" },
  { id: 2, title: "Работа №2", rutubeId: "5a8107f2c7a17b0dcba9dbf561a3265f" },
  { id: 3, title: "Работа №3", rutubeId: "63b50c2c37714c2e915a2d0a1dbd2de5" },
  { id: 4, title: "Работа №4", rutubeId: "6ff57651fba56f4fa3b1ba7bcc37a5db" },
  { id: 5, title: "Работа №5", rutubeId: "52f1c4f9d180dc0ad11a2ae7c0c4b2a2" },
  { id: 6, title: "Работа №6", rutubeId: "a13dc5a456e6a4a5ddb0cce519f32e3d" },
  { id: 7, title: "Работа №7", rutubeId: "bd12da863252cc5a15ccdaf0a0346c7d" },
  { id: 8, title: "Работа №8", rutubeId: "de3fa5e2c49d5d25c15e74ba59e15c3c" },
  { id: 9, title: "Работа №9", rutubeId: "ee0f40a2f63aa3233f71c0fe01bdccab" },
  { id: 10, title: "Работа №10", rutubeId: "c2e98abca9f36f81ece91398aa380760" }
];

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
          {participantWorks.map((work) => (
            <div key={work.id} className="work-item">
              <h3 className="work-title">{work.title}</h3>
              <div className="video-wrapper">
                <iframe 
                  src={`https://rutube.ru/play/embed/${work.rutubeId}/`} 
                  frameBorder="0" 
                  allow="clipboard-write; autoplay" 
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Экспортируем компонент с отключенным SSR
export default dynamic(() => Promise.resolve(WorksPage), { ssr: false }); 