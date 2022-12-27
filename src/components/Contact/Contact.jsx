import PropTypes from 'prop-types';
import { ContactButton } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <ContactButton
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </ContactButton>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
