import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Text, Span } from './ContactList/ContactList.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contactObject => {
    const newContact = {
      ...contactObject,
      id: nanoid(),
    };

    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = idToDelete => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== idToDelete)
    );
  };

  const registerFilterValue = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    const normalizedString = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedString)
    );
  };

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}></ContactForm>
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter filter={filter} findContact={registerFilterValue}></Filter>

        {contacts.length === 0 && filter === '' ? (
          <Text>Unfortunately your contacts list is empty</Text>
        ) : filterContacts().length === 0 && filter !== '' ? (
          <Text>
            Your list does not contain the contact named
            <Span> {filter}</Span>
          </Text>
        ) : (
          <ContactList
            contacts={filterContacts()}
            deleteContact={deleteContact}
          />
        )}
      </Section>

      <GlobalStyles />
    </div>
  );
};
