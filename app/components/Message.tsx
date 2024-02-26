import { MessageProps } from '../interfaces/MessageProps';

const ChatMessage = ({ type, text }: MessageProps): JSX.Element | null => {
  switch (type) {
    case 'user':
      return (
        <div className="flex items-center gap-4 my-2">
          <img
            alt="Avatar"
            className="rounded-full"
            height="30"
            src="/logo.png"
            style={{ aspectRatio: '40/40', objectFit: 'cover' }}
            width="30"
          />
          <div className="flex-1">
            <div className="rounded-lg border p-4 text-sm">{text}</div>
          </div>
        </div>
      );
    case 'system':
      return (
        <div className="flex flex-col gap-4 my-2">
          <div className="rounded-lg border p-4 text-sm bg-gray-100 max-w-[85%] self-start">
            {text}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export { ChatMessage };
