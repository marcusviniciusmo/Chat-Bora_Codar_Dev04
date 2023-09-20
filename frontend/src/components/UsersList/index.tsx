import { useEffect, useState } from "react";
import { Search } from "../Search";
import { NoUser } from '../NoUser';
import { UsersListMocks, UsersListProps } from '../../types/UsersList';
import { MockedData } from '../../mocks/UsersList';
import * as Styles from "./styles";
import { Avatar } from "../Avatar";

export function UsersList(props: UsersListProps) {
  const [mockedData, setMockedData] = useState<UsersListMocks[]>([]);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [userContent, setUserContent] = useState<UsersListMocks[]>([]);

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  useEffect(() => {
    setUserContent(mockedData);
  }, [mockedData]);

  useEffect(() => {
    updateUserContent();
  }, [props.contactSelected]);

  const filteredList = userContent.filter((item) => {
    const name = item.name.toLowerCase().includes(inputSearch.toLowerCase());

    const lastMessage = item.messages[item.messages.length - 1].message.
      toLowerCase().includes(inputSearch.toLowerCase());

    return name || lastMessage;
  });

  const orderedList = filteredList.sort((a, b) => {
    const lastMessageA = a.messages.length > 0 ? a.messages[a.messages.length - 1].date : '';
    const lastMessageB = b.messages.length > 0 ? b.messages[b.messages.length - 1].date : '';

    if (lastMessageA > lastMessageB) {
      return 1;
    } else if (lastMessageA < lastMessageB) {
      return -1;
    } else {
      return 0;
    };
  });

  const getLastMessage = (contact: UsersListMocks) => {
    if (contact.id === props.contactSelected?.id) {
      return props.contactSelected.messages[props.contactSelected.messages.length - 1].message;
    };

    return contact.messages[contact.messages.length - 1].message;
  };

  const getDateFromMessage = (contact: UsersListMocks) => {
    if (contact.id === props.contactSelected?.id) {
      return props.contactSelected.messages[props.contactSelected.messages.length - 1].date;
    };

    return contact.messages[contact.messages.length - 1].date;
  };

  const setChatContact = (contact: UsersListMocks) => {
    props.setContactSelected(contact);
    props.setChatContent(true);
  };

  const updateUserContent = () => {
    setUserContent((prevUserContent) => {
      return prevUserContent.map((user) => {
        if (user.id === props.contactSelected.id) {
          return {
            ...user,
            name: props.contactSelected.name,
            avatar: props.contactSelected.avatar,
            status: props.contactSelected.status,
            messages: props.contactSelected.messages
          }
        }

        return user;
      })
    });
  };

  return (
    <Styles.Container>
      <Search inputSearch={inputSearch} setInput={setInputSearch} />

      <Styles.List>

        {
          orderedList.length > 0
            ? orderedList.map((contact) => {
              return (
                <Styles.UserContainer
                  key={contact.id}
                  title={contact.name}
                  onClick={() => setChatContact(contact)}
                >
                  <Avatar imageUrl={contact.avatar} />

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
      </  Styles.List>
    </Styles.Container>
  );
};