type SearchProps = {
  inputSearch: string;
  setInput: Function;
};

export function Search(props: SearchProps) {
  return (
    <>
      <h1>SEARCH Component</h1>

      <input
        type='text'
        value={props.inputSearch}
        onChange={e => props.setInput(e.target.value)}
      />
    </>
  );
};