import { useState } from "react";
import { Search } from "../Search";

export function UsersList() {
  const [inputSearch, setInputSearch] = useState<string>('');

  const contacts = [
    {
      id: 1,
      name: 'Cecilia'
    }, {
      id: 2,
      name: 'Cecilia 2'
    }, {
      id: 3,
      name: 'Cecilia - Antigo'
    }, {
      id: 4,
      name: 'Amor'
    }
  ];

  const filteredList = contacts.filter((item) => {
    return item.name.toLowerCase().includes(inputSearch.toLowerCase())
  });

  return (
    <>
      <h1>USERS LIST Component</h1>

      <Search inputSearch={inputSearch} setInput={setInputSearch} />

      {
        filteredList.map((contact) => {
          return (
            <span key={contact.id}>{contact.name}</span>
          )
        })
      }
    </>
  );
};