export interface ChatMocks {
  id: number;
  name: string;
  avatar: string;
  status: string;
  messages: {
    id: number;
    sender?: string;
    message: string;
    date: string;
    time: string;
  }[];
};