import { createClient } from '@supabase/supabase-js';

// Значения по умолчанию для локальной разработки
const defaultUrl = 'https://placeholder.supabase.co';
const defaultKey = 'placeholder_key';

// Получаем URL и ключ из переменных окружения или используем заглушки
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || defaultUrl;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || defaultKey;

// Создаем клиент только если мы на клиенте или если URL действительный
let supabase: any = null;

// Функция для определения, находимся ли мы на клиенте
const isClient = () => typeof window !== 'undefined';

// Функция для инициализации Supabase клиента
const initSupabase = () => {
  if (!supabase) {
    try {
      // Проверяем валидность URL
      new URL(supabaseUrl);
      supabase = createClient(supabaseUrl, supabaseKey);
    } catch (error) {
      // Если URL невалидный и мы на сервере, используем мок-объект
      if (!isClient()) {
        supabase = {
          from: () => ({
            select: () => ({
              eq: () => ({
                maybeSingle: async () => ({ data: null, error: null })
              })
            }),
            insert: async () => ({ error: null })
          })
        };
        console.warn('Using mock Supabase client for server rendering');
      } else {
        console.error('Invalid Supabase URL:', error);
        throw error;
      }
    }
  }
  return supabase;
};

// Интерфейс для голоса
export interface Vote {
  tg_id: string;
  choices: number[];
  username?: string;  // Telegram логин пользователя
  first_name?: string; // Имя пользователя
  last_name?: string;  // Фамилия пользователя
}

// Функция для проверки, голосовал ли пользователь
export async function hasUserVoted(tgId: string): Promise<boolean> {
  const supabase = initSupabase();
  
  // На сервере возвращаем false, чтобы избежать ошибок
  if (!isClient()) {
    return false;
  }
  
  const { data, error } = await supabase
    .from('votes')
    .select('tg_id')
    .eq('tg_id', tgId)
    .maybeSingle();
  
  if (error) {
    console.error('Error checking vote:', error);
    return false;
  }
  
  return !!data;
}

// Функция для сохранения голоса
export async function saveVote(
  tgId: string, 
  choices: number[], 
  username?: string, 
  firstName?: string, 
  lastName?: string
): Promise<boolean> {
  const supabase = initSupabase();
  
  // На сервере нельзя сохранять голоса
  if (!isClient()) {
    return false;
  }
  
  const { error } = await supabase
    .from('votes')
    .insert([{ 
      tg_id: tgId, 
      choices: choices,
      username: username,
      first_name: firstName,
      last_name: lastName
    }]);
  
  if (error) {
    console.error('Error saving vote:', error);
    return false;
  }
  
  return true;
} 