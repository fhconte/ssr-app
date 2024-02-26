export interface FormProps {
  onSubmit: (message: string, chatId: number) => void;
  chatId: number;
}
