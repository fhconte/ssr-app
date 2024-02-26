import { MessageType } from "../interfaces/MessageProps";

export const mockData = [
  {
    name: 'Flávio Conte',
    avatar: '/logo.png',
    messages: [
      {
        type: 'system' as MessageType,
        text: 'O Tailwind ajuda a estilizar seu HTML de forma rápida e consistente.',
      },
      {
        type: 'system' as MessageType,
        text: 'Você pode usar o PostCSS com o Tailwind para compilar e otimizar seu código CSS.',
      },
      {
        type: 'user' as MessageType,
        text: 'O Tailwind CSS permite criar UIs personalizadas com rapidez e facilidade.',
      },
    ],
  },
];
