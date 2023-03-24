import { Container, Info, Content, Message } from "./styles";

type SentMessageProps = {
  sender?: string;
  time: string;
  message: string;
};

export function SentMessage(props: SentMessageProps) {
  return (
    <Container className={props.sender ? 'contact' : 'user'}>
      <Info>
        {props.sender ? props.sender : 'Você'} - {props.time}
      </Info>

      <Content className={props.sender ? 'contact' : 'user'}>
        <Message>{props.message}</Message>
      </Content>
    </Container>
  );
};