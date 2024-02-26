export type MessageType = 'user' | 'system';

export interface MessageProps {
  type: MessageType;
  text: string;
}
