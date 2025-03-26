import { useEffect, useState } from 'react';

interface TelegramUser {
  id: string;
  first_name?: string;
  last_name?: string;
  username?: string;
}

export function useTelegram() {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initTelegram = async () => {
      try {
        // Проверяем, что мы на клиенте и window доступен
        if (typeof window !== 'undefined') {
          // Динамически импортируем SDK только на клиенте
          const WebApp = (await import('@twa-dev/sdk')).default;
          
          if (WebApp.initDataUnsafe.user) {
            setUser({
              id: WebApp.initDataUnsafe.user.id.toString(),
              first_name: WebApp.initDataUnsafe.user.first_name,
              last_name: WebApp.initDataUnsafe.user.last_name,
              username: WebApp.initDataUnsafe.user.username,
            });
          } else {
            // Для локальной разработки
            setUser({
              id: 'test_user_id_123',
              first_name: 'Test',
              last_name: 'User',
              username: 'testuser',
            });
          }
          
          setIsReady(true);
          WebApp.expand();
        }
      } catch (error) {
        console.error('Failed to initialize Telegram WebApp:', error);
        // Для локальной разработки
        setUser({
          id: 'test_user_id_123',
          first_name: 'Test',
          last_name: 'User',
          username: 'testuser',
        });
        setIsReady(true);
      }
    };

    initTelegram();
  }, []);

  return { user, isReady };
} 