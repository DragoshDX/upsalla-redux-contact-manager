import { contactsClient } from '../../../api/contacts';

// POST /contacts
// the computer "thunk" a bit
export const createContact = (contact) => {
  return async (dispatch, getState) => {
    const state = getState();
    const { auth } = state;
    const { user } = auth;

    contact.userId = `${user.id}`;

    const { data } = await contactsClient.post('/contacts', contact);

    return data;
  };
};

// GET /contact/id

// GET /contacts

// PATCH /contact/id

// DELETE /contact/id

export const setContact = (contact) => {
  return {
    type: 'contacts/set',
    payload: contact,
  };
};
