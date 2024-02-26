'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { Header } from './components/Header';
import { ChatMessage } from './components/Message';
import { Form } from './components/Form';
import { DataProps } from './interfaces/DataProps';
import { FormProps } from './interfaces/FormProps';
import { mockData } from './utils/mockData';

const Home = () => {
  const [data, setData] = useState<DataProps[]>(mockData);
  const [scrollPositions, setScrollPositions] = useState<
    Record<number, number>
  >({});
  const messagesEndRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    data.forEach((chat) => scrollToBottom(chat.id));
  }, [data]);

  const scrollToBottom = (chatId: number) => {
    const messagesEndRef = messagesEndRefs.current[chatId];
    if (messagesEndRef) {
      messagesEndRef.scrollTop =
        messagesEndRef.scrollHeight - (scrollPositions[chatId] || 0);
    }
  };

  const handleMessageSubmit = useCallback<FormProps['onSubmit']>(
    (newMessage, chatId) => {
      if (newMessage.trim().length === 0) return;
      setData((prevData) =>
        prevData.map((chat) =>
          chat.id === chatId
            ? {
              ...chat,
              messages: [
                ...chat.messages,
                { type: 'user', text: newMessage },
              ],
            }
            : chat
        )
      );
      setScrollPositions((prevPositions) => ({
        ...prevPositions,
        [chatId]: 0,
      }));
    },
    []
  );

  const handleScroll = useCallback(
    (chatId: number) => {
      const messagesEndRef = messagesEndRefs.current[chatId];
      if (messagesEndRef) {
        setScrollPositions((prevPositions) => ({
          ...prevPositions,
          [chatId]: messagesEndRef.scrollHeight - messagesEndRef.scrollTop,
        }));
      }
    },
    [messagesEndRefs]
  );

  const renderData = useMemo(() => {
    return data.map((chat) => (
      <div
        key={chat.id}
        className="max-w-sm border border-gray-200 rounded-lg overflow-hidden mb-4"
      >
        <Header name={chat.name} avatar={chat.avatar} />
        <div
          ref={(ref) => {
            messagesEndRefs.current[chat.id] = ref;
          }}
          className="max-h-96 overflow-y-auto py-2 px-4 scroll-smooth"
          onScroll={() => handleScroll(chat.id)}
        >
          {chat.messages.map((message, messageIndex) => (
            <ChatMessage key={messageIndex} {...message} />
          ))}
        </div>
        <Form
          onSubmit={(message) => handleMessageSubmit(message, chat.id)}
          chatId={chat.id}
        />
      </div>
    ));
  }, [data, messagesEndRefs, handleScroll, handleMessageSubmit]);

  return <div className="flex flex-col p-4 overflow-hidden">{renderData}</div>;
};

export default Home;
