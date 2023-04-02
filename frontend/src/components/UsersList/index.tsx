import { useEffect, useState } from "react";
import { Search } from "../Search";
import { NoUser } from '../NoUser';
import { UsersListMocks, UsersListProps } from '../../types/UsersList';
import { MockedData } from '../../mocks/UsersList';
import * as Styles from "./styles";

export function UsersList(props: UsersListProps) {
  const [mockedData, setMockedData] = useState<UsersListMocks[]>([]);
  const [inputSearch, setInputSearch] = useState<string>('');

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const filteredList = mockedData.filter((item) => {
    const name = item.name.toLowerCase().includes(inputSearch.toLowerCase());

    const lastMessage = item.messages[item.messages.length - 1].message.
    toLowerCase().includes(inputSearch.toLowerCase());

    return name || lastMessage;
  });

  const getLastMessage = (contact: UsersListMocks) => {
    return contact.messages[contact.messages.length - 1].message;
  };

  const getDateFromMessage = (contact: UsersListMocks) => {
    return contact.messages[contact.messages.length - 1].date;
  };

  const setChatContact = (contact: UsersListMocks) => {
    props.setContactSelected(contact);
  };

  return (
    <Styles.Container>
      <Search inputSearch={inputSearch} setInput={setInputSearch} />

      {
        filteredList. length > 0
        ? filteredList.map((contact) => {
          return (
            <Styles.UserContainer
              key={contact.id}
              title={contact.name}
              onClick={() => setChatContact(contact)}
            >
              <Styles.UserAvatar src={contact.avatar} />

              <Styles.Info>
                <Styles.Name>{contact.name}</Styles.Name>

                <Styles.Message>{getLastMessage(contact)}</Styles.Message>
              </Styles.Info>

              <Styles.DateTime>{getDateFromMessage(contact)}</Styles.DateTime>
            </Styles.UserContainer>
          )
        })
        : <NoUser />
      }
    </Styles.Container>
  );
};