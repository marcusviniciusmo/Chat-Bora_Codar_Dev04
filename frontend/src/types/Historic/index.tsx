export interface HistoricProps {
  messagesContactSelected: {
    id: number;
    sender?: string;
    message: string;
    date: string;
    time: string;
  }[];
};