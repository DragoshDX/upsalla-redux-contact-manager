import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../ui';
import { GoogleLogin, Greeting } from './../../auth';
import { unsetUser } from '../../../store/actions/auth';

export const HeaderSecondary = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  return (
    <section className="bg-gray-200 py-2 border-b border-b-gray-500 ">
      <div className="container mx-auto px-4 min-h-10 flex items-center justify-between">
        {authenticated ? (
          <>
            <Button title="Add Contact" skin="success">
              Add Contact
            </Button>

            <div className="flex gap-4 items-center">
              <Greeting></Greeting>

              <Button
                skin="danger"
                title="Logout"
                onClick={() => {
                  dispatch(unsetUser());
                }}
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <GoogleLogin></GoogleLogin>
        )}
      </div>
    </section>
  );
};
