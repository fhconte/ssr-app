import { DataProps } from '../interfaces/DataProps';

const mockData: DataProps[] = [
  {
    id: 1,
    name: 'Flávio Conte',
    avatar: '/logo.png',
    messages: [
      {
        type: 'system',
        text: 'I am a Senior Front-end Engineer with over 12 years of experience in the technology field.',
      },
      {
        type: 'system',
        text: 'I have developed a passion for creating and improving web and mobile applications, using cutting-edge tools and frameworks like ReactJS, Typescript, NextJS and Jest.',
      },
      {
        type: 'user',
        text: "I hold JavaScript certifications from Alura Cursos Online and Udemy, and I'm currently studying NodeJS at Rocketseat.",
      },
    ],
  },
  {
    id: 2,
    name: 'Henrique de Holanda',
    avatar: '/logo.png',
    messages: [
      {
        type: 'user',
        text: 'Additionally, I received in-person training in advanced HTML5 and CSS3, through a course offered by an Adobe Certified Partner.',
      },
      {
        type: 'system',
        text: "I'm always training myself and learning new resources, as I recently received training in GraphQL and Docker courses, for example.",
      },
      {
        type: 'user',
        text: 'As a Front-end Software Engineer, I have worked on several projects for clients in different industries, such as healthcare, automotive, and banking.',
      },
    ],
  },
  {
    id: 3,
    name: 'Este',
    avatar: '/logo.png',
    messages: [
      {
        type: 'system',
        text: 'O Tailwind CSS permite criar UIs personalizadas com rapidez e facilidade.',
      },
      {
        type: 'user',
        text: 'Basicamente, o Tailwind ajuda a estilizar seu HTML de forma rápida e consistente.',
      },
      {
        type: 'user',
        text: 'Você pode usar o PostCSS com o Tailwind para compilar e otimizar seu código CSS, aplicando transformações como autoprefixing, minificação e muito mais.',
      },
    ],
  },
  {
    id: 4,
    name: 'Código',
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
