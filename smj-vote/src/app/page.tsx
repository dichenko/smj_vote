'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import VideoSelector from '../../components/VideoSelector';
import Alert from '../../components/Alert';
import { useTelegram } from '../../hooks/useTelegram';
import { hasUserVoted, saveVote } from '../../lib/supabase';

export default function Home() {
  const { user, isReady } = useTelegram();
  
  const [videoChoices, setVideoChoices] = useState<number[]>([0, 0, 0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [alert, setAlert] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  useEffect(() => {
    if (user && isReady) {
      checkUserVoted();
    }
  }, [user, isReady]);

  const checkUserVoted = async () => {
    if (!user) return;
    
    const voted = await hasUserVoted(user.id);
    setHasVoted(voted);
    
    if (voted) {
      showAlert('Вы уже проголосовали', 'error');
    }
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({
      show: true,
      message,
      type
    });
  };

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
      const success = await saveVote(user.id, videoChoices);
      
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
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-[#346cdb]">
      {alert.show && (
        <Alert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert({ ...alert, show: false })} 
        />
      )}
      
      <div className="w-full max-w-md mx-auto bg-[#346cdb] p-6 rounded-lg shadow-lg animate-fade-in">
        <div className="flex justify-center mb-6">
          {!logoError ? (
            <div className="relative w-32 h-32">
              <Image 
                src="/images/logo.png" 
                alt="Lego мультфильм логотип" 
                fill
                style={{ objectFit: 'contain' }}
                priority
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-[#ff5db7] rounded-full text-[#ffffff] font-bold text-xl">
              LEGO
            </div>
          )}
        </div>
        
        <h1 className="text-2xl font-bold text-center text-[#ffffff] mb-6">
          Форма для голосования за Lego-мультфильм<br />
          <span className="text-[#ff5db7]">Номинация "Выбор зрителя"</span>
        </h1>
        
        <p className="text-center text-[#ffffff] mb-8">
          Выберите номера трех роликов, которые вам понравились больше всего.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {[0, 1, 2].map((index) => (
            <VideoSelector
              key={index}
              id={`video-${index + 1}`}
              label={`Ролик #${index + 1}`}
              value={videoChoices[index]}
              onChange={(value) => handleChoiceChange(index, value)}
              disabled={hasVoted || isSubmitting}
              selectedValues={videoChoices.filter(v => v !== 0)}
            />
          ))}
          
          <button
            type="submit"
            disabled={hasVoted || isSubmitting}
            className={`w-full btn-primary ${
              hasVoted || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Обработка...' : 'Проголосовать'}
          </button>
        </form>
      </div>
    </main>
  );
}
