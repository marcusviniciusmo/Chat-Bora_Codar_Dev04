export interface UsersListMocks {
  id: number;
  name: string;
  avatar: string;
  messages: {
    id: number;
    sender?: string;
    message: string;
    date: string;
    time: string;
  }[];
};