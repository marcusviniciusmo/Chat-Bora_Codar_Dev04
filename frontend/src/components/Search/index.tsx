import { useEffect, useState } from "react";
import { SearchMocks, SearchProps } from "../../types/Search";
import { MockedData } from "../../mocks/Search";
import { Container, Input } from "./styles";

export function Search(props: SearchProps) {
  const [mockedData, setMockedData] = useState<SearchMocks>();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container>
      <Input
        type={mockedData?.typeField}
        placeholder={mockedData?.placeholder}
        value={props.inputSearch}
        onChange={e => props.setInput(e.target.value)}
      />
    </Container>
  );
};