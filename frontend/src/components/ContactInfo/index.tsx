import { ContactInfoMocks, ContactInfoProps } from '../../types/ContactInfo';
import { MockedData } from '../../mocks/ContactInfo';
import * as Styles from "./styles";
import { useEffect, useState } from 'react';

export function ContactInfo(props: ContactInfoProps) {
  const [mockedData, setMockedData] = useState<ContactInfoMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Avatar>
          <Styles.ContactImg src={props.avatar} />
        </Styles.Avatar>

        <Styles.Info>
          <Styles.Name>{props.name}</Styles.Name>

          <Styles.Status>
            <Styles.Ellipse />
            <Styles.Description>{props.status}</Styles.Description>
          </Styles.Status>
        </Styles.Info>

        <Styles.Close>
          <Styles.Icon
            src={mockedData?.icon}
            title={mockedData?.titleIcon}
          />
        </Styles.Close>
      </Styles.Content>

      <Styles.DateTime>{props.time}</Styles.DateTime>
    </Styles.Container>
  );
};