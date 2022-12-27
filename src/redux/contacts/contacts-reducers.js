import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

export const contactsReducer = (
  state = JSON.parse(localStorage.getItem('contacts')) || [],
  { type, payload }
) => {
  switch (type) {
    case ADD_CONTACT:
      const isExist = state.find(
        ({ name }) => name.toLowerCase() === payload.name.toLowerCase()
      );

      if (isExist) {
        return alert(`${payload.name} is already in contacts.`);
      }

      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};
