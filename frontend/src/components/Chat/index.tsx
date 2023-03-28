import { UsersList } from "../UsersList";
import { Content } from "../Content";
import { Container, UserArea } from "./styles";

export function Chat() {
  return (
    <Container>
      <UserArea>
        <UsersList />
      </UserArea>

      <Content />
    </Container>
  );
};