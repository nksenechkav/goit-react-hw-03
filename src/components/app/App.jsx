import { useState } from 'react'
import { useEffect } from 'react'
import initialContacts from '../contacts.json'
import ContactForm from '../contactForm/ContactForm'
import SearchBox from '../searchBox/SearchBox'
import ContactList from '../contactList/ContactList'

import './App.css'

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("savedContacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  const addContact = newContact => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    window.localStorage.setItem("savedContacts", JSON.stringify(updatedContacts));
  };

  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
    window.localStorage.setItem("savedContacts", JSON.stringify(updatedContacts));
  };


const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div className='phonebook-container'>
       <h1>Phonebook</h1>
       <ContactForm onAdd={addContact}/>
       <SearchBox value={filter} onFilter={setFilter}/>
       <ContactList contacts={searchedContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App
