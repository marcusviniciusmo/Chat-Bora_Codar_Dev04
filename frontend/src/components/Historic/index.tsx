import { SentMessage } from "../SentMessage";
import { Container } from "./styles";

type HistoricProps = {
  messagesContactSelected: {
    id: number;
    sender?: string;
    message: string;
    date: string;
    time: string;
  }[];
};

export function Historic(props: HistoricProps) {
  return (
    <Container>
      {
        props.messagesContactSelected.map((message) => {
          return (
            <SentMessage
              sender={message.sender}
              time={message.time}
              message={message.message}
            />
          )
        })
      }
    </Container>
  );
};