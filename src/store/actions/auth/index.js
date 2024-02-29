export const setUser = (user) => {
  return {
    type: 'auth/setUser',
    payload: user,
  };
};
