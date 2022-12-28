import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilterValue } from 'redux/filter/filter-selectors';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Contact name={name} number={number} id={id}></Contact>
        </ListItem>
      ))}
    </List>
  );
};
