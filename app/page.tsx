'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { ChatMessage } from './components/Message';
import { Form } from './components/Form';
import { DataProps } from './interfaces/DataProps';
import { FormProps } from './interfaces/FormProps';
import { mockData } from './utils/mockData';

const Home = () => {
  const [data, setData] = useState<DataProps[]>(mockData);
  const [scrollPositions, setScrollPositions] = useState<Record<number, number>>({});
  const messagesEndRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const scrollToBottom = (chatId: number) => {
    const messagesEndRef = messagesEndRefs.current[chatId];
    if (messagesEndRef) {
      messagesEndRef.scrollTop = messagesEndRef.scrollHeight - scrollPositions[chatId];
    }
  };

  useEffect(() => {
    data.forEach((chat) => scrollToBottom(chat.id));
  }, [data]);

  const handleMessageSubmit: FormProps['onSubmit'] = (newMessage: string, chatId: number) => {
    setData((prevData) => {
      return prevData.map((chat) => {
        if (chat.id === chatId && newMessage.length > 0) {
          return {
            ...chat,
            messages: [...chat.messages, { type: 'user', text: newMessage }],
          };
        }
        return chat;
      });
    });
    setScrollPositions((prevPositions) => ({
      ...prevPositions,
      [chatId]: 0,
    }));
  };

  const handleScroll = (chatId: number) => {
    const messagesEndRef = messagesEndRefs.current[chatId];
    if (messagesEndRef) {
      setScrollPositions((prevPositions) => ({
        ...prevPositions,
        [chatId]: messagesEndRef.scrollHeight - messagesEndRef.scrollTop,
      }));
    }
  };

  const renderData = () => {
    return data.map((chat) => (
      <div key={chat.id} className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
        <div>
          <Header name={chat.name} avatar={chat.avatar} />
          <div
            ref={(ref) => {
              messagesEndRefs.current[chat.id] = ref;
            }}
            className="overflow-x-hidden max-h-96 scroll-smooth py-2 px-4"
            onScroll={() => handleScroll(chat.id)}
          >
            {chat.messages.map((message, messageIndex) => (
              <ChatMessage
                key={messageIndex}
                type={message.type}
                text={message.text}
              />
            ))}
          </div>
          <Form
            onSubmit={(message) => handleMessageSubmit(message, chat.id)}
            chatId={chat.id}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col p-4 overflow-hidden">
      {renderData()}
    </div>
  );
};

export default Home;