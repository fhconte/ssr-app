import { HeaderProps } from '../interfaces/HeaderProps';
import { MessageProps } from '../interfaces/MessageProps';

export interface DataProps extends HeaderProps {
  id: number;
  messages: MessageProps[];
}
