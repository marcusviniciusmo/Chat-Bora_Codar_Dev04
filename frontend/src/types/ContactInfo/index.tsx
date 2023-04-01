export interface ContactInfoMocks {
  icon: string;
  titleIcon: string;
};

export interface ContactInfoProps {
  avatar: string;
  name: string;
  status: string;
  time: string;
  chatContent: boolean;
  setChatContent: Function;
};