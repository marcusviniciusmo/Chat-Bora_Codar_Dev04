import { Users } from "../Users";
import { UserChat } from "../UserChat";
import { Container } from "./styles";
import { useState } from "react";
import { UsersMocks } from "../../types/Users";

export function Chat() {
  const [userSelected, setUserSelected] = useState<UsersMocks>();

  return (
    <Container>
      <Users
        user={userSelected!}
        setUser={setUserSelected}
      />

      <UserChat
        user={userSelected!}
      />
    </Container>
  );
};