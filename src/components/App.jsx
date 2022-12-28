import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilterValue } from 'redux/filter/filter-selectors';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Text, Span } from './ContactList/ContactList.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

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
        {contacts.length !== 0 && filteredContacts.length !== 0 ? (
          <ContactList />
        ) : contacts.length === 0 ? (
          <Text>Unfortunately your contacts list is empty</Text>
        ) : (
          <Text>
            Your list does not contain the contact named
            <Span> {filter}</Span>
          </Text>
        )}
      </Section>

      <GlobalStyles />
    </div>
  );
};
