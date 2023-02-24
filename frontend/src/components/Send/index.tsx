import { Button } from "../Button";
import { Container, Message, Input } from "./styles";

export function Send() {
  return (
    <Container>
      <Message>
        <Input placeholder='Digite sua mensagem' />

        <Button />
      </Message>
    </Container>
  );
};