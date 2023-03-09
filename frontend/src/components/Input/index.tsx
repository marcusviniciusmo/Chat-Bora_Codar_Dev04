import { InputProps } from "../../types/Input";
import { InputField } from "./styles";

export function Input(props: InputProps) {
  return (
    <InputField
        type='text'
        placeholder='Search user or message'
        onChange={props.setInput()}
      />
  );
};