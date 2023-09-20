export interface ContentProps {
  contactSelected: {
    id: number;
    name: string;
    avatar: string;
    status: string;
    messages: ContentMessagesHistoricProps[];
  };
  chatContent: boolean;
  setChatContent: Function;
  setContactSelected: Function;
  setUserContent: Function;
};

export interface ContentMessagesHistoricProps {
  id: number;
  sender?: string;
  message: string;
  date: string;
  time: string;
};