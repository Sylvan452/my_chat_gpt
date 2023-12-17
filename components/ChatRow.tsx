import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  return (
    <Link href={`/chat/${id}`}>
      <a className="flex items-center justify-between p-2 hover:bg-gray-200 cursor-pointer">
        <div className="flex items-center space-x-2">
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <p>This is me</p>
        </div>
        <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
      </a>
    </Link>
  );
}

export default ChatRow;
