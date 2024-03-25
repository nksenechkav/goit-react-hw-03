import { useState } from 'react'
import { useEffect } from 'react'
// import ContactForm from '../contactForm/ContactForm'
// import SearchBox from '../searchBox/SearchBox'
import ContactList from '../contactList/ContactList'
// import Contact from '../contact/Contact'

import './App.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedContacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return[
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ];
  });

useEffect(() => {
  window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
}, [contacts]);
console.log(contacts);


// const updatePhonebook = feedbackType => {
//   setContacts({
//     ...contacts,
//     [feedbackType]: contacts[feedbackType] + 1
//   });
// };
  

  return (
    <div className='phonebook-container'>
       <h1>Phonebook</h1>
       {/* <ContactForm />
       <SearchBox /> */}
       <ContactList contacts={contacts} />
    </div>
  )
}

export default App
