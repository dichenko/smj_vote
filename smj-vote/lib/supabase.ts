import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

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