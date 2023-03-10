export interface UsersMocks {
  id: number;
  avatar: string;
  name: string;
  user: string;
  lastMessage: string;
  date: string;
  statusOnline: boolean;
};

export interface UsersProps {
  user: UsersMocks;
  setUser: Function;
};