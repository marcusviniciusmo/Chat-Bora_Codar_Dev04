import { useState } from "react";
import { Content } from "../Content";
import { User } from "../User";
import { UsersList } from "../UsersList";
import { Container, UserArea } from "./styles";

export function Chat() {
  const [contactSelected, setContactSelected] = useState({
    id: 1,
    name: 'Cecilia Sassaki',
    avatar: '',
    status: 'Online',
    messages: [
      {
        id: 1,
        sender: '',
        message: '',
        date: '',
        time: ''
      }
    ]
  });

  return (
    <Container>
      <UserArea>
        <User />

        <UsersList
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        />
      </UserArea>

      <Content
        contactSelected={contactSelected}
      />
    </Container>
  );
};