import { SentMessage } from "../SentMessage";
import { HistoricProps } from "../../types/Historic";
import { Container } from "./styles";

export function Historic(props: HistoricProps) {
  return (
    <Container>
      {
        props.messagesContactSelected.map((message) => {
          return (
            <SentMessage
              key={message.id}
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