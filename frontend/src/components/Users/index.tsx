import { useEffect, useState } from 'react';
import { SearchUser } from '../SearchUser';
import { UserNotFound } from '../UserNotFound';
import { UsersMocks, UsersProps } from '../../types/Users';
import { MockedData } from '../../mocks/Users';
import * as Styles from "./styles";

export function Users(props: UsersProps) {
  const [mockedData, setMockedData] = useState<UsersMocks[]>([]);
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

  const selectUser = (user: UsersMocks) => {
    props.setUser(user);
  };

  return (
    <Styles.Container>
      <SearchUser
        input={inputSearch}
        setInput={() => handleInput}
      />

      {
        filteredData.length > 0
        ? filteredData.map((user) => {
          return (
            <Styles.UserContainer
              key={user.id}
              className={inputSearch && 'inputFilled'}
              title={user.name}
              onClick={() => selectUser(user)}
            >
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
        : <UserNotFound />
      }
    </Styles.Container>
  );
};