'use client';

import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { useSession } from 'next-auth/react';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();

  const [message] = useCollection(
    session &&
      query(
        collection(
          db,
          'user',
          session?.user?.email!,
          'chats',
          chatId,
          'message',
        ),
        orderBy('createdAt', 'asc'),
      ),
  );

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {message?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}

      {message?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
