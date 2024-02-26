'use client'

import React, { useState, useRef, useEffect } from 'react';
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

  const handleMessageSubmit: FormProps['onSubmit'] = (newMessage: string, chatId: number) => {
    setData(prevData => {
      return prevData.map(chat => {
        if (chat.id === chatId && newMessage.length > 0) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              { type: 'user', text: newMessage }
            ]
          };
        }
        return chat;
      });
    });
  };

  const renderData = () => {
    return (
      <div className="flex flex-col p-4 overflow-hidden">
        {data.map((chat, chatIndex) => (
          <div key={chatIndex}>
            <Header name={chat.name} avatar={chat.avatar} />
            <div
              ref={messagesEndRef}
              className="overflow-x-hidden max-h-96 scroll-smooth"
            >
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

  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      {renderData()}
      {mockData.map((chat) => (
        <Form
          key={chat.id}
          onSubmit={(message) => handleMessageSubmit(message, chat.id)}
          chatId={chat.id}
        />
      ))}
    </div>
  );
};

export default Home;