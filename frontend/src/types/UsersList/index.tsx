export interface UsersListMocks {
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

export interface UsersListProps {
  contactSelected: {
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
  setContactSelected: Function;
  setChatContent:Function;
};