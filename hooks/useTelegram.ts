import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

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
        // Инициализируем WebApp
        if (WebApp.initDataUnsafe.user) {
          setUser({
            id: WebApp.initDataUnsafe.user.id.toString(),
            first_name: WebApp.initDataUnsafe.user.first_name,
            last_name: WebApp.initDataUnsafe.user.last_name,
            username: WebApp.initDataUnsafe.user.username,
          });
        } else {
          // Для локальной разработки можно использовать тестовый ID
          setUser({
            id: 'test_user_id_123',
            first_name: 'Test',
            username: 'testuser',
          });
        }
        
        setIsReady(true);
        WebApp.expand();
      } catch (error) {
        console.error('Failed to initialize Telegram WebApp:', error);
        // Для локальной разработки
        setUser({
          id: 'test_user_id_123',
          first_name: 'Test',
          username: 'testuser',
        });
        setIsReady(true);
      }
    };

    initTelegram();
  }, []);

  return { user, isReady };
} 