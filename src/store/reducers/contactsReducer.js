const initialState = {
  entities: {
    // tgfa6123: {
    //   id: 'tgfa6123',
    //   name: 'Dragos',
    //   surname: 'fsfdafdas',
    //   phone: '0741000000',
    //   email: '213@fdas.com',
    //   userId: '109567558349948894412',
    // },
  },
};

export const contactsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'contacts/set':
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: payload,
        },
      };
    default:
      return state;
  }
};
