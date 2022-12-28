import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contacts/contacts-reducers';
import { filterReducer } from './filter/filter-reducers';

const enhancer = devToolsEnhancer();

const RootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = createStore(RootReducer, enhancer);
