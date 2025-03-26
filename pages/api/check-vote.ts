import type { NextApiRequest, NextApiResponse } from 'next';
import { hasUserVoted } from '../../lib/supabase';

type Data = {
  hasVoted: boolean;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ hasVoted: false, error: 'Method not allowed' });
  }

  const { tgid } = req.query;
  
  if (!tgid || typeof tgid !== 'string') {
    return res.status(400).json({ hasVoted: false, error: 'Invalid user ID' });
  }
  
  try {
    const hasVoted = await hasUserVoted(tgid);
    return res.status(200).json({ hasVoted });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ hasVoted: false, error: 'Server error' });
  }
} 