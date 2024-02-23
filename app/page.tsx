import { Header } from './components/Header';
import { ChatMessage } from './components/Message';
import { Form } from './components/Form';
import { DataProps } from './interfaces/DataProps';
import { mockData } from './utils/mockData';

const data: DataProps[] = mockData;

const renderData = () => {
  return (
    <>
      {data.map((chat, chatIndex) => (
        <div key={chatIndex}>
          <Header name={chat.name} avatar={chat.avatar} />
          <div className="flex flex-col p-4 overflow-hidden">
            {chat.messages.map((message, messageIndex) => (
              <ChatMessage
                key={messageIndex}
                type={message.type}
                text={message.text}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      {renderData()}
      <Form />
    </div>
  );
}
