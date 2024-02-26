import { DataProps } from '../interfaces/DataProps';

const mockData: DataProps[] = [
  {
    id: 1,
    name: 'Flávio Conte',
    avatar: '/logo.png',
    messages: [
      {
        type: 'user',
        text: 'O Tailwind CSS permite criar UIs personalizadas com rapidez e facilidade.',
      },
      {
        type: 'system',
        text: 'Basicamente, o Tailwind ajuda a estilizar seu HTML de forma rápida e consistente.',
      },
      {
        type: 'system',
        text: 'Você pode usar o PostCSS com o Tailwind para compilar e otimizar seu código CSS, aplicando transformações como autoprefixing, minificação e muito mais.',
      },
    ],
  },
  {
    id: 2,
    name: 'Fulano',
    avatar: '/logo.png',
    messages: [
      {
        type: 'user',
        text: "Used by some of the world's largest companies, Next.js enables you to create high-quality we applications with the power of React components.",
      },
      {
        type: 'system',
        text: 'The web framework for when it matters Peerless performance, efficiency and developer experience.',
      },
      {
        type: 'system',
        text: 'Next.js is trusted by some of the biggest names of the web.',
      },
    ],
  },
];

export { mockData };
