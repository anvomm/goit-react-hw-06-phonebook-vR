import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Contact name={name} number={number} id={id}></Contact>
        </ListItem>
      ))}
    </List>
  );
};
