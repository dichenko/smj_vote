import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useTelegram } from '../hooks/useTelegram';
import { hasUserVoted, saveVote } from '../lib/supabase';
import Link from 'next/link';

// Импортируем компоненты динамически с отключенным SSR
const VideoSelector = dynamic(() => import('../components/VideoSelector'), { ssr: false });
const Alert = dynamic(() => import('../components/Alert'), { ssr: false });

// Основной компонент
function HomePage() {
  // Добавляем состояние для отслеживания клиентского рендеринга
  const [isClient, setIsClient] = useState(false);
  const { user, isReady } = useTelegram();
  
  const [videoChoices, setVideoChoices] = useState<number[]>([0, 0, 0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [alert, setAlert] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });
  
  // Устанавливаем isClient в true после монтирования компонента
  useEffect(() => {
    setIsClient(true);
  }, []);

  const showAlert = useCallback((message: string, type: 'success' | 'error') => {
    setAlert({
      show: true,
      message,
      type
    });
    
    // Автоматически скрываем уведомление через 3 секунды
    setTimeout(() => {
      setAlert(prev => ({ ...prev, show: false }));
    }, 3000);
  }, []);

  const checkUserVoted = useCallback(async () => {
    if (!user) return;
    
    const voted = await hasUserVoted(user.id);
    setHasVoted(voted);
    
    if (voted) {
      showAlert('Вы уже проголосовали', 'error');
    }
  }, [user, showAlert]);

  useEffect(() => {
    if (user && isReady && isClient) {
      checkUserVoted();
    }
  }, [user, isReady, checkUserVoted, isClient]);

  const handleChoiceChange = (index: number, value: number) => {
    const newChoices = [...videoChoices];
    newChoices[index] = value;
    setVideoChoices(newChoices);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      showAlert('Ошибка: Не удалось получить данные пользователя', 'error');
      return;
    }
    
    if (hasVoted) {
      showAlert('Вы уже проголосовали', 'error');
      return;
    }
    
    // Проверяем, что выбраны все три ролика
    if (videoChoices.some(choice => choice === 0)) {
      showAlert('Пожалуйста, выберите три ролика', 'error');
      return;
    }
    
    // Проверяем, что выбраны три разных ролика
    const uniqueChoices = new Set(videoChoices);
    if (uniqueChoices.size !== 3) {
      showAlert('Пожалуйста, выберите три разных ролика', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await saveVote(
        user.id, 
        videoChoices, 
        user.username, 
        user.first_name, 
        user.last_name
      );
      
      if (success) {
        showAlert('Ваш голос успешно принят!', 'success');
        setHasVoted(true);
      } else {
        showAlert('Произошла ошибка при сохранении голоса', 'error');
      }
    } catch (error) {
      console.error('Vote submission error:', error);
      showAlert('Произошла ошибка при сохранении голоса', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {alert.show && (
        <Alert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert({ ...alert, show: false })} 
        />
      )}
      
      <div className="card">
        <div className="logo">
          <img 
            src="/images/logo.png" 
            alt="Lego мультфильм логотип" 
            width={100}
            height={100}
          />
        </div>
        
        {/* Закомментированный оригинальный заголовок 
        <h1>
          Голосование за Lego-мультфильм
        </h1>
        */}
        
        {/* Новый заголовок-изображение */}
        <div className="header-image">
          <img 
            src="/images/header.jpg" 
            alt="Голосование за Lego-мультфильм" 
            width="100%"
          />
        </div>
        
        <Link href="/works">
          <button className="works-button">
            Посмотреть работы участников
          </button>
        </Link>
        
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          Выберите номера трех роликов, которые вам понравились больше всего.
        </p>
        
        <form onSubmit={handleSubmit}>
          {[0, 1, 2].map((index) => (
            <VideoSelector
              key={index}
              id={`video-${index + 1}`}
              label={`Отдать голос за ролик под номером`}
              value={videoChoices[index]}
              onChange={(value) => handleChoiceChange(index, value)}
              disabled={hasVoted || isSubmitting}
              selectedValues={videoChoices.filter(v => v !== 0)}
            />
          ))}
          
          <button
            type="submit"
            disabled={hasVoted || isSubmitting}
          >
            {isSubmitting ? 'Обработка...' : 'Проголосовать'}
          </button>

          <p style={{ marginTop: '15px', fontSize: '12px', textAlign: 'center', color: '#666' }}>
            Ваш голос очень важен для нас. Спасибо за участие!
          </p>
        </form>
      </div>
    </main>
  );
}

// Экспортируем компонент с отключенным SSR
export default dynamic(() => Promise.resolve(HomePage), { ssr: false }); 