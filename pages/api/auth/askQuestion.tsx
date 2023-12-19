import admin from 'firebase-admin';
import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';
import { adminDb } from '@/firebaseAdmin';

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'Please provide a prompt!' });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: 'Please provide a valid chat ID!' });
    return;
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || 'ChatGPT was unable to find an answer for that!',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  await adminDb
    .collection('user')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('message')
    .add(message);

  res.status(200).json({ answer: message.text });
}
