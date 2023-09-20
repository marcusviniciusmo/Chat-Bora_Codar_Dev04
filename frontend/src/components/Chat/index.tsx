import { useEffect, useState } from "react";
import { Content } from "../Content";
import { User } from "../User";
import { UsersList } from "../UsersList";
import { MockedData } from "../../mocks/Chat";
import { ChatMocks } from "../../types/Chat";
import { UsersListMocks } from "../../types/UsersList";
import { Container, UserArea } from "./styles";

export function Chat() {
  const [mockedData, setMockedData] = useState<ChatMocks>();
  const [chatContent, setChatContent] = useState<boolean>(false);
  const [contactSelected, setContactSelected] = useState(mockedData);
  const [userContent, setUserContent] = useState<UsersListMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <UserArea>
        <User />

        <UsersList
          userContentUpdated={userContent!}
          setChatContent={setChatContent}
          contactSelected={contactSelected!}
          setContactSelected={setContactSelected}
        />
      </UserArea>

      <Content
        chatContent={chatContent}
        setChatContent={setChatContent}
        contactSelected={contactSelected!}
        setContactSelected={setContactSelected}
        setUserContent={setUserContent}
      />
    </Container>
  );
};