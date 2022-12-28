import { SET_FILTER_VALUE } from './filter-types';

export const setFilter = value => {
  return {
    type: SET_FILTER_VALUE,
    payload: value,
  };
};
