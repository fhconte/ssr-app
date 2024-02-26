'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { ChatMessage } from './components/Message';
import { Form } from './components/Form';
import { DataProps } from './interfaces/DataProps';
import { FormProps } from './interfaces/FormProps';
import { mockData } from './utils/mockData';

const Home: React.FC = () => {
  const [data, setData] = useState<DataProps[]>(mockData);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const memoizedData = useMemo(() => data, [data]);

  const renderData = () => {
    return (
      <div className="flex flex-col p-4 overflow-hidden">
        {memoizedData.map((chat, chatIndex) => (
          <div key={chatIndex}>
            <Header name={chat.name} avatar={chat.avatar} />
            <div ref={messagesEndRef} className="overflow-x-hidden max-h-96 scrollSmooth">
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
      </div>
    );
  };

  const handleMessageSubmit: FormProps['onSubmit'] = (newMessage: string) => {
    const updatedData = [...data];
    updatedData[0].messages.push({ type: 'user', text: newMessage });
    setData(updatedData);
  };

  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      {renderData()}
      <Form onSubmit={handleMessageSubmit} />
    </div>
  );
};

export default Home;
