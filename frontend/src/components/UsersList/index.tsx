import ContactPhoto from '../../assets/contactAvatar.png';
import { useState } from "react";
import { Search } from "../Search";
import * as Styles from "./styles";

export function UsersList() {
  const [inputSearch, setInputSearch] = useState<string>('');

  const contacts = [
    {
      id: 1,
      name: 'Cecilia',
      avatar: ContactPhoto,
      lastMessage: '#boraCodar!🚀',
      date: 'Yesterdary'
    }, {
      id: 2,
      name: 'Cecilia 2',
      avatar: ContactPhoto,
      lastMessage: '#boraCodar!🚀',
      date: 'Yesterdary'
    }, {
      id: 3,
      name: 'Cecilia - Antigo',
      avatar: '',
      lastMessage: '#boraCodar!🚀',
      date: 'Yesterdary'
    }, {
      id: 4,
      name: 'Amor',
      avatar: '',
      lastMessage: '#bora!🚀',
      date: 'Yesterdary'
    }
  ];

  const filteredList = contacts.filter((item) => {
    const name = item.name.toLowerCase().includes(inputSearch.toLowerCase());

    const lastMessage = item.lastMessage.toLowerCase().includes(inputSearch.toLowerCase());

    return name || lastMessage;
  });

  return (
    <Styles.Container>
      <Search inputSearch={inputSearch} setInput={setInputSearch} />

      {
        filteredList.map((contact) => {
          return (
            <Styles.UserContainer
              key={contact.id}
              title={contact.name}
            >
              <Styles.UserAvatar src={contact.avatar} />

              <Styles.Info>
                <Styles.Name>{contact.name}</Styles.Name>

                <Styles.Message>{contact.lastMessage}</Styles.Message>
              </Styles.Info>

              <Styles.DateTime>{contact.date}</Styles.DateTime>
            </Styles.UserContainer>
          )
        })
      }
    </Styles.Container>
  );
};