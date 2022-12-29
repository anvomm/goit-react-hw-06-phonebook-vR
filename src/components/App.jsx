import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
      <GlobalStyles />
    </div>
  );
};
