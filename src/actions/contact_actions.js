export const INSERT_CONTACT = 'INSERT_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const insertContact = contact => ({
  type: INSERT_CONTACT,
  contact
});

export const updateContact = contact => ({
  type: UPDATE_CONTACT,
  contact
});

export const removeContact = contact => ({
  type: REMOVE_CONTACT,
  contact
});
