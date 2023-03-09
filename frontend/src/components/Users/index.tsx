import { useEffect, useState } from 'react';
import { SearchUser } from '../SearchUser';
import { UsersProps } from '../../types/Users';
import { MockedData } from '../../mocks/Users';
import * as Styles from "./styles";

export function Users() {
  const [mockedData, setMockedData] = useState<UsersProps[]>([]);
  const [inputSearch, setInputSearch] = useState<string>('');

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const handleInput = (e: any) => {
    setInputSearch(e.target.value);
  };

  const filteredData = mockedData.filter((user) => {
    return user.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      user.lastMessage.toLowerCase().includes(inputSearch.toLowerCase());
  });

  return (
    <Styles.Container>
      <SearchUser
        input={inputSearch}
        setInput={() => handleInput}
      />

      {
        filteredData.map((user) => {
          return (
            <Styles.UserContainer key={user.id}>
              <Styles.Avatar src={user.avatar} />

              <Styles.Info>
                <Styles.Name>{user.name}</Styles.Name>

                <Styles.LastMessage>
                  <Styles.User>{user.user}</Styles.User>

                  <Styles.Message>{user.lastMessage}</Styles.Message>
                </Styles.LastMessage>
              </Styles.Info>

              <Styles.Date>{user.date}</Styles.Date>
            </Styles.UserContainer>
          )
        })
      }
    </Styles.Container>
  );
};