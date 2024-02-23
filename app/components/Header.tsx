import { HeaderProps } from '../interfaces/HeaderProps';

const Header = ({ name, avatar }: HeaderProps): JSX.Element => {
  return (
    <header className="flex items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <img
            alt="Logo"
            height="40"
            src={avatar}
            style={{ aspectRatio: '40/40', objectFit: 'cover' }}
            width="40"
          />
        </span>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
    </header>
  );
};

export { Header };
