import type { NextApiRequest, NextApiResponse } from 'next';
import { hasUserVoted, saveVote } from '../../lib/supabase';

type Data = {
  success: boolean;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { tg_id, choices } = req.body;
  
  if (!tg_id || !choices || !Array.isArray(choices) || choices.length !== 3) {
    return res.status(400).json({ success: false, error: 'Invalid request data' });
  }
  
  try {
    // Проверяем, голосовал ли пользователь ранее
    const hasVoted = await hasUserVoted(tg_id);
    
    if (hasVoted) {
      return res.status(400).json({ success: false, error: 'User has already voted' });
    }
    
    // Проверяем, что выбраны 3 уникальных ролика
    const uniqueChoices = new Set(choices);
    if (uniqueChoices.size !== 3) {
      return res.status(400).json({ success: false, error: 'Please select 3 different videos' });
    }
    
    // Сохраняем голос
    const success = await saveVote(tg_id, choices);
    
    if (success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: 'Failed to save vote' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
} 