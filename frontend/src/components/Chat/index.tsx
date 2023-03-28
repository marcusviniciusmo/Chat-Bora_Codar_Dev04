import { Content } from "../Content";
import { User } from "../User";
import { UsersList } from "../UsersList";
import { Container, UserArea } from "./styles";

export function Chat() {
  return (
    <Container>
      <UserArea>
        <User />

        <UsersList />
      </UserArea>

      <Content />
    </Container>
  );
};