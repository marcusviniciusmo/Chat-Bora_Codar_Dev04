import { Users } from "../Users";
import { UserChat } from "../UserChat";
import { Container } from "./styles";

export function Chat() {
  return (
    <Container>
      <Users />

      <UserChat />
    </Container>
  );
};