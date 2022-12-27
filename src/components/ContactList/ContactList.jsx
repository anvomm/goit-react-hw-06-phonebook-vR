import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            contacts={contacts}
            deleteContact={deleteContact}
          ></Contact>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func,
};
