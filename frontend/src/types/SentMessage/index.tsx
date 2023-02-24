export interface SentMessageProps extends React.HTMLProps<any> {
  contactName?: string;
  time: string;
  message: string;
};