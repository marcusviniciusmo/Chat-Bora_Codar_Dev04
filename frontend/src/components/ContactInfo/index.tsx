import { useEffect, useState } from 'react';
import { Avatar } from '../Avatar';
import { ContactInfoMocks, ContactInfoProps } from '../../types/ContactInfo';
import { MockedData } from '../../mocks/ContactInfo';
import * as Styles from "./styles";

export function ContactInfo(props: ContactInfoProps) {
  const [mockedData, setMockedData] = useState<ContactInfoMocks>();

  const setContent = () => {
    props.setChatContent(!props.chatContent);
  };

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Styles.Container>
      <Styles.Content>
        <Avatar imageUrl={props.avatar} />

        <Styles.Info>
          <Styles.Name>{props.name}</Styles.Name>

          <Styles.Status>
            <Styles.Ellipse className={props.status} />
            <Styles.Description
              className={props.status}
            >
              {props.status}
            </Styles.Description>
          </Styles.Status>
        </Styles.Info>

        <Styles.Close>
          <Styles.Icon
            src={mockedData?.icon}
            title={mockedData?.titleIcon}
            onClick={setContent}
          />
        </Styles.Close>
      </Styles.Content>

      <Styles.DateTime>{props.time}</Styles.DateTime>
    </Styles.Container>
  );
};