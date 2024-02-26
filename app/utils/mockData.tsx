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
];

export { mockData };