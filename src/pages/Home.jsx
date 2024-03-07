import { useSelector } from 'react-redux';
import { Authorize } from '../components/auth';
import { Layout } from '../layouts/Layout';

export const Home = () => {
  const { name } = useSelector(({ auth }) => {
    return auth.user;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 text-center pt-40">
        <Authorize>
          <h1 className="text-lg fontbold">Hello, {name}</h1>
        </Authorize>
      </div>
    </Layout>
  );
};
