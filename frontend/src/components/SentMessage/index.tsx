import { SentMessageProps } from "../../types/SentMessage";
import { Container, Info, User, Time, Message } from "./styles";

export function SentMessage(props: SentMessageProps) {
  return (
    <Container className={props.className}>
      <Info>
        <User>{props.contactName ? props.contactName : 'Você'} - </User>
        <Time>{props.time}</Time>
      </Info>

      <Message className={props.className}>{props.message}</Message>
    </Container>
  );
};