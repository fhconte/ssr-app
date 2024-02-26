import { DataProps } from "../interfaces/DataProps";

const mockData: DataProps[] = [
  {
    name: 'Flávio Conte',
    avatar: '/logo.png',
    messages: [
      {
        type: 'system',
        text: 'O Tailwind ajuda a estilizar seu HTML de forma rápida e consistente.',
      },
      {
        type: 'system',
        text: 'Você pode usar o PostCSS com o Tailwind para compilar e otimizar seu código CSS.',
      },
      {
        type: 'user',
        text: 'O Tailwind CSS permite criar UIs personalizadas com rapidez e facilidade.',
      },
    ],
  },
];

export { mockData };
