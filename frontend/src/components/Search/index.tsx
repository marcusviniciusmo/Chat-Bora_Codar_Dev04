import { Container, Input } from "./styles";

type SearchProps = {
  inputSearch: string;
  setInput: Function;
};

export function Search(props: SearchProps) {
  return (
    <Container>
      <Input
        type='text'
        placeholder='Search a user or a message'
        value={props.inputSearch}
        onChange={e => props.setInput(e.target.value)}
      />
    </Container>
  );
};