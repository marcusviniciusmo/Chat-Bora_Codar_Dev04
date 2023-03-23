import { ContactInfo } from "../ContactInfo";
import { Historic } from "../Historic";
import { Send } from "../Send";

export function Content() {
  return (
    <>
      <h1>CONTENT Component</h1>

      <ContactInfo />
      <h3>AQUI VAI UM BOTAO - Close</h3>

      <Historic />

      <Send />
    </>
  );
};