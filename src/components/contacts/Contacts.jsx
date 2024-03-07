import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { readContacts } from '../../store/actions/contacts';

export const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readContacts());
  }, [dispatch]);

  return (
    <ul>
      <li>Contact</li>
    </ul>
  );
};
